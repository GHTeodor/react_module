import {useState} from "react";

import './App.css';
import Users from "./components/Users_Posts_Comments/Users";
import Posts from "./components/Users_Posts_Comments/Posts";
import Comments from "./components/Users_Posts_Comments/Comments";


function App() {
    const [userId, setUserId] = useState(null);
    const [postId, setPostId] = useState(null);

    const getUserId = (id) => {
        setUserId(id)
            getPostId(null);
    };

    const getPostId = (id) => {
        setPostId(id);
    };

    return (
        <div className='blocks'>
            <Users getUserId={getUserId}/>
            {userId && <Posts userId={userId} getPostId={getPostId}/>}
            {postId && <Comments postId={postId}/>}
        </div>
    );
}

export default App;