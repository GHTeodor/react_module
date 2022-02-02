import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {getTask} from "../../store/task.slice";


const Form = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (taskI) => {
        if (taskI.taskI !== "") {
            dispatch(getTask({taskI, id: new Date().getTime(), status: false}));
        }
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder="Task" {...register("taskI")}/>
                <button>Add Task</button>
            </form>
        </div>
    );
};

export {Form};