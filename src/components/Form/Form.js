import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../store";


const Form = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
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
            <input type="text" placeholder="Model:" {...register('model')}/>
            <input type="number" min="0" max="1000000" placeholder="Price:" {...register('price')}/>
            <input type="number" min="1990" max="2022" placeholder="Year:" {...register('year')}/>
            <button>{id ? "_" : "+"}</button>
        </form>
    );
};

export {Form};