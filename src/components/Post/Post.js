import React from 'react';
import './Post.css'

export default function Post(props){
    const { id, title, username, profile_pic} = props;
    return(
        <div>
            {id}
            {title}
            {username}
            {profile_pic}
        </div>
    )
}

