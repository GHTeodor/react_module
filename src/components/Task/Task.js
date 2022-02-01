import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {checker, removeTask} from "../../store/task.slice";


const Task = ({id, task: {taskI}}) => {
    const [x, setX] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (x === true) {
            dispatch(checker(1));
        } else {
            dispatch(checker(-1));
        }
    }, [dispatch, x]);

    return (
        <div>
            <input type="checkbox" checked={x} onChange={() => setX(!x)}/>
            {!x &&
                <b> {taskI} </b>}
            {x &&
                <i> <s>{taskI}</s> </i>}
            <button onClick={() => dispatch(removeTask({id}))}>X</button>
        </div>
    );
};

export {Task};