import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {user_Service} from "../../../../services/user_Service";
import UserPosts from "../../../../components/Users/UserPosts";


const UserPostsPage = () => {
    const {id} = useParams();
    const [userPosts, setUserPosts] = useState([]);
    const {state} = useLocation();

    useEffect(() => {

        if (state)
            user_Service.getUserPosts(id).then(value => setUserPosts([...value]));

    }, [id]);

    return (
        <>
            {userPosts && (
                <>
                    {userPosts.map(usPost => <UserPosts key={usPost.id} userPost={usPost} />)}
                </>
            )}
        </>
    );
};

export {UserPostsPage};