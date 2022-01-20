import React from 'react';

const PostComments = ({postComments: {postId, id, name, email, body}}) => {
    return (
        <div>
            <br/><b>postId:</b> {postId}
            <br/><b>id:</b> {id}
            <br/><b>name:</b> {name}
            <br/><b>email:</b> {email}
            <br/><b>body:</b> {body}
        </div>
    );
};

export default PostComments;