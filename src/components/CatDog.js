import React, {useReducer, useState} from "react";

import {Reducer} from "./Reducer"


const CatDog = () => {
    const [state, dispatch] = useReducer(Reducer, {cat1: "", dog: ""});
    const [cat, setCat] = useState({});
    const [dog, setDog] = useState({});

    const catClick = () => {
        if (!state.cat)
            dispatch({type: "newCat", payload: cat.payload});
        else if (!state.cat1)
            dispatch({type: "newCat1", payload: cat.payload});
        else
            dispatch({type: "newCat2", payload: cat.payload});
    };

    const dogClick = () => {
        if (!state.dog)
            dispatch({type: "newDog", payload: dog.payload});
        else if (!state.dog1)
            dispatch({type: "newDog1", payload: dog.payload});
        else
            dispatch({type: "newDog2", payload: dog.payload});
    };


    return (
        <div className={'wrapper'}>
            <div className={'form'}>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder="Add Cat"
                           onChange={event => setCat({payload: event.target.value})}/>
                    <button onClick={catClick}>Cat</button>
                    <input placeholder="Add Dog"
                           onChange={event => setDog({payload: event.target.value})}/>
                    <button onClick={dogClick}>Dog</button>
                </form>
            </div>

            <hr/>

            <div className={"cat-dog"}>
                <div>
                    {state.cat}
                    {state.cat &&
                        <button onClick={() => dispatch({type: "deleteCat"})}>X</button>}
                    <br/>
                    {state.cat1}
                    {state.cat1 &&
                        <button onClick={() => dispatch({type: "deleteCat1"})}>X</button>}
                    <br/>
                    {state.cat2}
                    {state.cat2 &&
                        <button onClick={() => dispatch({type: "deleteCat2"})}>X</button>}

                </div>
                <div>
                    {state.dog}
                    {state.dog &&
                        <button onClick={() => dispatch({type: "deleteDog"})}>X</button>}
                    <br/>
                    {state.dog1}
                    {state.dog1 &&
                        <button onClick={() => dispatch({type: "deleteDog1"})}>X</button>}
                    <br/>
                    {state.dog2}
                    {state.dog2 &&
                        <button onClick={() => dispatch({type: "deleteDog2"})}>X</button>}
                </div>
            </div>
        </div>
    );
};

export default CatDog;