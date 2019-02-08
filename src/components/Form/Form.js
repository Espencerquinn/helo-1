import React, { Component } from 'react';
import './Form.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component{

    constructor(props){
        super(props)
        this.state = {
            title: '',
            image_url: '',
            content: ''
        }
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }

    addPost(){
        const { title, image_url, content } = this.state;
        axios.post('/api/post', {
            title: title,
            image_url: image_url,
            content: content
        })
        .then(res => {
            console.log('post added')
        })
    }

    render(){
        const { title, image_url, content } = this.state
        return(
            <div className='form-container'>
                    <div className='form-wrapper'>
                        Title
                        <input value={title} onChange={(e) => this.handleChange('title', e.target.value)} />
                        <img src={image_url} alt='post'/>
                        Image URL
                        <input value={image_url} onChange={(e) => this.handleChange('image_url', e.target.value)} />
                        Content
                        <textarea value={content} onChange={(e) => this.handleChange('content', e.target.value)} />
                        <Link to='/dashboard'><button onClick={() => {this.addPost()}}>Create Post</button></Link>
                    </div>
            </div>
        )
    }
}

export default Form;
