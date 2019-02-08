import React, { Component } from 'react';
import './Dashboard.css'
import Post from './../Post/Post';
import axios from 'axios';

class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state = {
            postList: []
        }
    }

    componentDidMount(){
        //do join to create postList
        axios.get('/api/posts')
        .then(res => {
            console.log(res.data)
            this.setState({
                postList: res.data
            })
        })
    }

    render(){
        return(
            <div className='dash-container'>
                <div className='dash-content'>
                    <div className='dash-search'>
                        <div className='search-wrapper'>
                            <input />
                            <button>Search</button>
                            <button>Reset</button>
                        </div>
                        <div className='my-posts-wrapper'>
                            <h3>My Posts</h3>
                            <p>checkbox</p>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.postList.map(post => (
                                <Post
                                    key={post.id}
                                    id={post.id}
                                    title={post.title}
                                    username={post.username}
                                    profile_pic={post.profile_pic}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
