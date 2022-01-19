import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {post_Service} from "../../services/post_Service";
import Posts from "../../components/Posts/Posts";
import "./PostsPage.css"

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        post_Service.getAll().then(value => setPosts(value));
    }, []);

    return (
        <div className='postPage'>
            <div>
                <h1>Posts</h1>
                {posts.map(post => <Posts key={post.id} post={post}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {PostsPage};