import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import {changeStatus, checker, removeTask} from "../../store/task.slice";


const Task = ({id, task: {taskI}, status}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (status === true) {
            dispatch(checker(1));
        } else {
            dispatch(checker(-1));
        }
    }, [dispatch, status]);

    return (
        <div>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            {!status &&
                <b> {taskI} </b>}
            {status &&
                <i> <s>{taskI}</s> </i>}
            <button onClick={() => {
                dispatch(removeTask({id}));
                status ? dispatch(checker(0)) : dispatch(checker(1));
            }}>X
            </button>
        </div>
    );
};

export {Task};