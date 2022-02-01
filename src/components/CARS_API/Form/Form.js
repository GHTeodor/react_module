import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {createCar, updateCar} from "../../../store";
import {carValidator} from "../../../validators/CarValidator";
import './Form.css';


const Form = () => {
    const {handleSubmit, register, reset, setValue, formState: {errors}} = useForm({
        resolver: joiResolver(carValidator),
        mode: "onBlur"
    });
    const dispatch = useDispatch();
    const {carForUpdate: {id, model, price, year}} = useSelector(state => state["carReducer"]);

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [model, price, year, setValue]);

    const submit = (data) => {
        if (id) {
            dispatch(updateCar({id, data}));
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <div><label><b>Model:</b><input type="text" {...register('model')}/></label>
                {errors.model && <div><i>{errors.model.message}</i></div>}</div>
            <div><label><b>Price:</b><input type="number" min="0" max="1000000" {...register('price')}/></label>
                {errors.price && <div><i>{errors.price.message}</i></div>}</div>
            <div><label><b>Year:</b><input type="number" min="1990" max="2022" {...register('year')}/></label>
                {errors.year && <div><i>{errors.year.message}</i></div>}</div>
            <button>{id ? "UPDATE current car" : "CREATE new car"}</button>
        </form>
    );
};

export {Form};