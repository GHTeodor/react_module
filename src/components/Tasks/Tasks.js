import React from 'react';
import {useSelector} from "react-redux";

import {Task} from "../Task/Task";


const Tasks = () => {
    const {tasks} = useSelector(state => state["taskReducer"]);
    return (
        <>
            {tasks.map(task => <Task key={task.id} id={task.id} task={task["taskI"]}/>)}
        </>
    );
};

export {Tasks};