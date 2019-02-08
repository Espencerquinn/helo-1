import React, { Component } from 'react';
import './Auth.css'
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from './../../ducks/reducer';

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount(){
        const { user_id } = this.props;
        if (user_id) {
            this.props.history.push('/dashboard')
        } else {
            axios.get('/api/user')
            .then(res => {
                this.props.updateUser(res.data)
                this.props.history.push('/dashboard')
            })
            .catch(err => {
            })
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    register = () => {
        const { username, password } = this.state
        axios.post('/auth/register', { username, password })
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
        })
    }

    login = () => {
        const { username, password } = this.state
        axios.post('/auth/login', { username, password })
        .then(res => {
            this.props.updateUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        const { username, password } = this.state;
        return(
            <div className='login-background'>
                <div className='login-wrapper'>
                    <div className='login-box'>
                        <div>
                            <img className='login-logo' src={'./graphics/logo.png'} alt="logo" />
                            <h1>Helo</h1>
                        </div>
                        <div className='login-input'>Username:<input value={username} onChange={(e) => this.handleChange('username', e.target.value)} /></div>
                        <div className='login-input'>Password:<input type='password' value={password} onChange={(e) => this.handleChange('password', e.target.value)} /></div>
                        <div>
                            <button onClick={this.login} className='login-button'>Login</button>
                            <button onClick={this.register} className='login-button'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user_id: state.user_id
    }
}

export default connect(mapStateToProps, { updateUser })(Auth);