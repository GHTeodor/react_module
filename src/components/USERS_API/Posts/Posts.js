import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../../../store";
import Post from "./Post";


const Posts = () => {
    const {posts, status, error} = useSelector(state => state["postReducer"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </>
    );
};

export {Posts};