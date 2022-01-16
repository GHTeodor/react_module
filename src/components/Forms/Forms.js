import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import './Forms.css'
import {carServices} from "../../services/axios_CarServices";


const Forms = ({getFilter, setCreatorByBtn}) => {

    const [formError, setFormError] = useState({});

    const {register, handleSubmit} = useForm({});

    const submit = async (car) => {
        try {
            const newCar = await carServices.create(car);
            // console.log(data);
            setCreatorByBtn(newCar);
        } catch (error) {
            setFormError(error.response.data);
        }
    };

    const [form, setForm] = useState({model: '', price: '', year: ''});

    const formCatch = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...eventData});
        getFilter(eventData);
    };

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" size="45" placeholder="Model" name={"model"} value={form.model}
                       defaultValue={''} {...register('model')}
                       onChange={formCatch}/>
                <input type="number" min="0" max="1000000" placeholder="Price" name={"price"} value={form.price}
                       defaultValue={''} {...register('price')}
                       onChange={formCatch}/>
                <input type="number" min="1990" max="2022" placeholder="Year" name={"year"} value={form.year}
                       defaultValue={''} {...register('year')}
                       onChange={formCatch}/>
                <button>Create</button>
            </form>
        </>
    );
};

export default Forms;