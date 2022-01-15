import {useEffect, useState} from "react";

import './Users_Posts_Comments.css';
import Comment from "../User_Post_Comment/Comment";
import {Comments_service} from "../../services/Comments_service";


function Comments({postId}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        Comments_service.commentByPostId(postId).then(value => setComments(value))

    }, [postId]);

    return (
        <div className='comments'>

            {comments.map(comment =>
                <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
}

export default Comments;