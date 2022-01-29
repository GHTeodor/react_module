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
        setForm({catInput: ''});
        if (form.catInput) {
            dispatch({type: "newCat", payload: cat});
        }
    };

    const dogClick = () => {
        setForm({dogInput: ''});
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
                               setCat({cat: event.target.value, id: state.cat.length});
                               setForm({catInput: event.target.value});
                           }}/>
                    <button onClick={catClick}>Cat</button>
                    <input placeholder="Add Dog" name="dogInput" value={form.dogInput}
                           onChange={event => {
                               setDog({dog: event.target.value, id: state.dog.length});
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
                            {state.cat.map((cat_X, index) => <Cats key={index} dispatch={dispatch} cat_X={cat_X}/>)}
                        </>}
                </div>

                <div>
                    {state.dog &&
                        <>
                            {state.dog.map((dog_X, index) => <Dogs key={index} dispatch={dispatch} dog_X={dog_X}/>)}
                        </>}
                </div>
            </div>
        </div>
    );
};

export default CatDog;