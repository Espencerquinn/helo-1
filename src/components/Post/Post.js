import React from 'react';
import { Link } from 'react-router-dom'
import './Post.css'

export default function Post(props){
    const { id, title, username, profile_pic} = props;
    return(
        <Link to={`/detail/${id}`}>
            <div className='post-wrapper'>
                <h2>{title}</h2>
                <div className='post-user'>
                    <h4>{username}</h4>
                    <img className='post-profile' src={profile_pic} alt='profile'/>
                </div>
            </div>
        </Link>
    )
}

