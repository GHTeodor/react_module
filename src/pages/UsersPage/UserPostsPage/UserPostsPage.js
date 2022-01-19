import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {user_Service} from "../../../services/user_Service";


const UserPostsPage = () => {
    const {id, title, body} = useParams();
    const [userPosts, setUserPosts] = useState(null);
    const {state} = useLocation();

    console.log(userPosts);

    useEffect(() => {
        if (state) {
            return setUserPosts(state);
        }

        user_Service.getUserPosts(id).then(value => setUserPosts({...value}));
    },[id]);

    return (
        <>
            {userPosts && (
                <>
                    <div><b>id:</b> {userPosts.id}</div>
                    <div><b>userId:</b> {userPosts.userId}</div>
                    <div><b>title:</b> {userPosts.title}</div>
                    <div><b>body:</b> {userPosts.body}</div>
                </>
            )}
        </>
    );
};

export {UserPostsPage};