import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {post_Service} from "../../../services/post_Service";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            return setPost(state);
        }

        post_Service.getOneById(id).then(value => setPost({...value}));
    },[id]);


    return (
        <>
            {post && (
                <>
                    <div><b>id:</b> {post.id}</div>
                    <div><b>userId:</b> {post.userId}</div>
                    <div><b>title:</b> {post.title}</div>
                    <div><b>body:</b> {post.body}</div>
                </>
            )}
        </>
    );
};

export {PostPage};