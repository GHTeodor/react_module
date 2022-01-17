import {useState} from 'react';

import './Forms.css'
import {carServices} from "../../services/axios_CarServices";


const Forms = ({getFilter, setCreatorByBtn}) => {
    const [form, setForm] = useState({model: '', price: '', year: ''});

    const submit = async (e) => {
        e.preventDefault();
        try {
            const newCar = await carServices.create(form);

            setForm({model: '', price: '', year: ''})
            setCreatorByBtn(newCar);
        } catch (error) {
            // setFormError(error.response.data);
        }
    };

    const formCatch = (e) => {
        const eventData = {...form, [e.target.name]: e.target.value};
        setForm({...eventData});
        getFilter(eventData);
    };

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" size="45" placeholder="Model" name={"model"} value={form.model}
                       // defaultValue={''} {...register('model')}
                       onChange={formCatch}/>
                <input type="number" min="0" max="1000000" placeholder="price" name={"price"} value={form.price}
                       // defaultValue={''} {...register('price')}
                       onChange={formCatch}/>
                <input type="number" min="1990" max="2022" placeholder="year" name={"year"} value={form.year}
                       // defaultValue={''} {...register('year')}
                       onChange={formCatch}/>
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                <button>Create</button>
            </form>
        </>
    );
};

export default Forms;
