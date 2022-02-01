import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Comment from "./Comment";
import {getAllComments} from "../../../store";


const Comments = () => {
    const {comments, status, error} = useSelector(state => state["commentReducer"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllComments());
    }, [dispatch]);

    return (
        <>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </>
    );
};

export {Comments};