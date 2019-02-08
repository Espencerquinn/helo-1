import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { updateUser } from './../../ducks/reducer';
import { connect } from 'react-redux';
import './Nav.css'

class Nav extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    componentDidMount(){
        const {user_id} = this.props;
        if (!user_id) {
            axios.get('./api/user')
            .then(res => {
                this.props.updateUser(res.data)
            })
            .catch(err => {
                this.props.history.push('/');
            })
        } else {
            //don't move
        }
    }

    logout(){
        axios.post('./auth/logout')
        .then(res => {
            this.props.updateUser({});
            this.props.history.push('/');
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { username, profile_pic } = this.props;
        const navbar = (this.props.location.pathname !== '/') ? 
        <div className='sidebar-wrapper'>
            <img className='profile' src={profile_pic} alt='profile' />
            {username}
            <Link to='/dashboard'><img className='nav-but' src={'./graphics/home.png'} alt='Home' /></Link>
            <Link to='/new'><img className='nav-but' src={'./graphics/new-post.png'} alt='Home' /></Link>
            <img className='nav-but' src={'./graphics/signout.png'} alt='Home' onClick={() => this.logout()} />
        </div>
        :
        <div></div>
        return(
            <div>
                {navbar}
            </div>
        )
    }
}

function mapStateToProps(state){
    const { user_id, username, profile_pic } = state
    return {
        user_id,
        username,
        profile_pic
    }
}


export default withRouter(connect(mapStateToProps, { updateUser })(Nav))