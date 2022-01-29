import {useReducer, useState} from "react";

import {Reducer} from "./Reducer"
import Cats from "./CatS&DogS/Cats";
import Dogs from "./CatS&DogS/Dogs";


const CatDog = () => {
    const [state, dispatch] = useReducer(Reducer, {cat: [], dog: []});
    const [cat, setCat] = useState([]);
    const [dog, setDog] = useState([]);

    const [form, setForm] = useState({catInput: '', dogInput: ''});

    const catClick = () => {
        setForm({catInput: '', dogInput: form.dogInput, value: ""});
        if (form.catInput) {
            dispatch({type: "newCat", payload: cat});
        }
    };

    const dogClick = () => {
        setForm({catInput: form.catInput, dogInput: '', value: ""});
        if (form.dogInput) {
            dispatch({type: "newDog", payload: dog});
        }
    };


    return (
        <div className={'wrapper'}>
            <div className={'form'}>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder="Add Cat" name="catInput" value={form.catInput}
                           onChange={event => {
                               setCat({cat: event.target.value, id: new Date().getTime()});
                               setForm({catInput: event.target.value});
                           }}/>
                    <button onClick={catClick}>Cat</button>
                    <input placeholder="Add Dog" name="dogInput" value={form.dogInput}
                           onChange={event => {
                               setDog({dog: event.target.value, id: new Date().getTime()});
                               setForm({dogInput: event.target.value});
                           }}/>
                    <button onClick={dogClick}>Dog</button>
                </form>
            </div>

            <hr/>

            <div className={"cat-dog"}>
                <div>
                    {state.cat &&
                        <>
                            {state.cat.map((cat_X) => <Cats key={cat_X.id} dispatch={dispatch} cat_X={cat_X}/>)}
                        </>}
                </div>

                <div>
                    {state.dog &&
                        <>
                            {state.dog.map((dog_X) => <Dogs key={dog_X.id} dispatch={dispatch} dog_X={dog_X}/>)}
                        </>}
                </div>
            </div>
        </div>
    );
};

export default CatDog;