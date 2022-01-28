import React, {useReducer, useState} from "react";

import {Reducer} from "./Reducer"


const CatDog = () => {
    const [state, dispatch] = useReducer(Reducer, {cat: "", dog: ""});
    const [cat, setCat] = useState(null);
    const [dog, setDog] = useState(null);

    const catClick = () => {
        if (!state.cat)
            dispatch({type: "newCat", payload: cat});
        else if (!state.cat1)
            dispatch({type: "newCat1", payload: cat});
        else
            dispatch({type: "newCat2", payload: cat});
    };

    const dogClick = () => {
        if (!state.dog)
            dispatch({type: "newDog", payload: dog});
        else if (!state.dog1)
            dispatch({type: "newDog1", payload: dog});
        else
            dispatch({type: "newDog2", payload: dog});
    };


    return (
        <div className={'wrapper'}>
            <div className={'form'}>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder="Add Cat"
                           onChange={event => setCat(event.target.value)}/>
                    <button onClick={catClick}>Cat</button>
                    <input placeholder="Add Dog"
                           onChange={event => setDog(event.target.value)}/>
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