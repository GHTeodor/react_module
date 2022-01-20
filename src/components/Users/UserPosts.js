import React from 'react';


const UserPosts = ({userPost: {id, userId, title, body}}) => {
    return (
        <div>
            <b>id:</b> {id}
            <br/><b>userId:</b> {userId}
            <br/><b>title:</b> {title}
            <br/><b>body:</b> {body}
        </div>
    );
};

export default UserPosts;