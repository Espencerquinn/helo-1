import React, { Component } from'react';
import './Detail.css';
import axios from 'axios';

export default class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            image_url: '',
            username: '',
            profile_pic: '',
            content: ''
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/api/post/${id}`)
        .then(res => {
            const { title, image_url, username, profile_pic, content } = res.data[0];
            this.setState({
                title: title,
                image_url: image_url,
                username: username,
                profile_pic: profile_pic,
                content: content
            })
        })
    }

    render(){
        const { title, image_url, username, profile_pic, content } = this.state;
        return(
            <div className='detail-container'>
                <div className='detail-wrapper'>
                    <div>
                        <h1>{title}</h1>
                        <img src={image_url} alt='post' />
                    </div>
                    <div>
                        {username}
                        <img src={profile_pic} alt='profile' />
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}