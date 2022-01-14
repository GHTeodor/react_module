import '../../App.css';
import Post from "../User_Post_Comment/Post";

import {useEffect, useState} from "react";


function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(value => setPosts(value))

    }, []);

    return (
        <div className='posts'>

            {posts.map(value =>
                <Post key={value.id} userId={value.userId} title={value.title} body={value.body}/>)}
        </div>
    );
}

export default Posts;