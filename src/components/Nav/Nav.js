import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Nav extends Component{

    render(){
        const navbar = (this.props.location.pathname !== '/') ? 
        <div>
            <Link to='/dashboard'><img src={'./graphics/home.png'} alt='Home' /></Link>
            <Link to='/new'><img src={'./graphics/new-post.png'} alt='Home' /></Link>
            <Link to='/'><img src={'./graphics/signout.png'} alt='Home' /></Link>
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

export default withRouter(Nav)