import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../../store";
import User from "./User";


const Users = () => {
    const {users, status, error} = useSelector(state => state["userReducer"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    return (
        <>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </>
    );
};

export {Users};