import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {
    const {tasks, checkbox} = useSelector(state => state["taskReducer"]);

    return (
        <h1>All: {tasks.length} Completed:{checkbox + tasks.length}</h1>
    );
};

export {Counter};