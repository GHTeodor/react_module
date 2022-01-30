import {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar, updateCar} from "../../store";


const Form = ({carForUpdate: {id, model, price, year}}) => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();

    useEffect(() => {
        setValue('model', model);
        setValue('price', price);
        setValue('year', year);
    }, [id]);

    const submit = (data) => {
        if (id) {
            dispatch(updateCar({id, data}));
            console.log(data);
        } else {
            dispatch(createCar({data}));
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Model:" {...register('model')}/>
            <input type="number" placeholder="Price:" {...register('price')}/>
            <input type="number" placeholder="Year:" {...register('year')}/>
            <button>{id ? "_" : "+"}</button>
        </form>
    );
};

export {Form};