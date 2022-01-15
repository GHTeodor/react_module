import {useEffect, useState} from "react";

import './Users_Posts_Comments.css';
import Post from "../User_Post_Comment/Post";
import {Post_service} from "../../services/Post_service";


function Posts({userId, getPostId}) {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        Post_service.postByUserId(userId).then(value=>setPosts(value))

    }, [userId]);

    return (
        <div className='posts'>

            {posts.map(post =>
                <Post key={post.id} post={post} getPostId={getPostId}/>)}
        </div>
    );
}

export default Posts;