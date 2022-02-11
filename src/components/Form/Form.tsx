import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {addCarThunk} from "../../store";

const Form: FC = () => {
    const {handleSubmit, register, reset, setValue} = useForm<ICar>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        dispatch(addCarThunk({car}));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Model" {...register("model")}/>
            <input type="number" placeholder="Price" min="0" max="1000000" {...register("price")}/>
            <input type="number" placeholder="Year" min="1990" max={new Date().getFullYear()} {...register("year")}/>
            <button>Create</button>
        </form>
    );
};

export {Form};