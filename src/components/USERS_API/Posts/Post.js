import React from 'react';

const Post = ({post: {userId, title, body}}) => {
    return (
        <>
            <h1>{userId}:
                {title}</h1>
            <p>{body}</p>
        </>
    );
};

export default Post;