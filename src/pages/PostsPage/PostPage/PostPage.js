import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {post_Service} from "../../../services/post_Service";
import Post from "../../../components/Posts/Post";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            return setPost(state);
        }

        post_Service.getOneById(id).then(value => setPost({...value}));
    }, [id]);


    return (
        <>
            {post && (
                <>
                    <Post key={post.id} post={post}/>

                    <Link to={'comments'} state={{...state}}>
                        <button>Get Comments</button>
                    </Link>

                    <Outlet/>
                </>
            )}
        </>
    );
};

export {PostPage};