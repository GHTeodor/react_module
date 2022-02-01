import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {getTask} from "../../store/task.slice";


const Form = () => {
    const {tasks, checkbox} = useSelector(state => state["taskReducer"]);
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (taskI) => {
        if (taskI.taskI !== "") {
            dispatch(getTask({taskI, id: new Date().getTime()}));
        }
        reset();
    }

    return (
        <div>
            <h1>All: {tasks.length} Completed:{checkbox + tasks.length}</h1>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Task" {...register("taskI")}/>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export {Form};