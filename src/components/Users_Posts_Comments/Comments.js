import '../../App.css';
import Comment from "../User_Post_Comment/Comment";

import {useEffect, useState} from "react";


function Comments() {

    const [comments, setComments] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(value => setComments(value))

    }, []);

    return (
        <div className='comments'>
            {comments.map(value =>
                <Comment key={value.id} postId={value.postId} name={value.name} email={value.email}
                         body={value.body}/>)}
        </div>
    );
}

export default Comments;