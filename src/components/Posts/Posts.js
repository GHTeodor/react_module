import React from 'react';
import {Link} from "react-router-dom";


const Posts = ({post}) => {
    const {id, title} = post;

    return (
        <div>
            <Link to={id.toString()} state={post}>{title[0].toUpperCase()+title.substring(1)}</Link>
        </div>
    );
};

export default Posts;