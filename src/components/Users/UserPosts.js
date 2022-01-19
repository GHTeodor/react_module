import React from 'react';


const UserPosts = ({userPost: {id, userId, title, body}}) => {
    return (
        <div>
            <div><b>id:</b> {id}</div>
            <div><b>userId:</b> {userId}</div>
            <div><b>title:</b> {title}</div>
            <div><b>body:</b> {body}</div>
        </div>
    );
};

export default UserPosts;