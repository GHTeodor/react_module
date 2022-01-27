import React, {useReducer, useState} from "react";

import {Reducer} from "./Reducer"


const CatDog = () => {
    const [state, dispatch] = useReducer(Reducer, {cat: "", dog: ""});
    const [cat, setCat] = useState({});
    const [dog, setDog] = useState({});

    return (
        <div className={'wrapper'}>
            <div className={'form'}>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder="Add Cat" name="cat"
                           onChange={event =>
                               setCat({payload: event.target.value})}/>
                    <button onClick={() => dispatch({type: "newCat", payload: cat.payload})}>Cat</button>
                    <input placeholder="Add Dog" name="dog"
                           onChange={event =>
                               setDog({payload: event.target.value})}/>
                    <button onClick={() => dispatch({type: "newDog", payload: dog.payload})}>Dog</button>
                </form>
            </div>

            <hr/>

            <div className={"cat-dog"}>
                <div>
                    {state.cat}
                    {state.cat &&
                        <button onClick={() => dispatch({type: "deleteCat"})}>X</button>}
                </div>
                <div>
                    {state.dog}
                    {state.dog &&
                        <button onClick={() => dispatch({type: "deleteDog"})}>X</button>}
                </div>
            </div>
        </div>
    );
};

export default CatDog;