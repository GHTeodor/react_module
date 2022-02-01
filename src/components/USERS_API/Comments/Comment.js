import React from 'react';

const Comment = ({comment: {name, email, body}}) => {
    return (
        <>
            <h1>{name}</h1>
            {email}
            <p>{body}</p>
        </>
    );
};

export default Comment;