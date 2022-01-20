import React from 'react';

const PostComments = ({postComments: {postId, id, name, email, body}}) => {
    return (
        <div>
            <div><b>postId:</b> {postId}</div>
            <div><b>id:</b> {id}</div>
            <div><b>name:</b> {name}</div>
            <div><b>email:</b> {email}</div>
            <div><b>body:</b> {body}</div>
        </div>
    );
};

export default PostComments;