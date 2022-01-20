import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {post_Service} from "../../../../services/post_Service";
import PostComments from "../../../../components/Posts/PostComments";

const PostCommentsPage = () => {
    const {id} = useParams();
    const [postComments, setPostComments] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            post_Service.getPostComments(id).then(value => setPostComments(value));
        }

    }, [id]);

    return (
        <>
            {postComments && (
                <>
                    {postComments.map(postComment=><PostComments key={postComment.id} postComments={postComment}/>)}
                </>
            )}
        </>
    );
};

export {PostCommentsPage};