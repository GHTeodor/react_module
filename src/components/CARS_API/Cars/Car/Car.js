import React from 'react';
import {useDispatch} from "react-redux";

import {getCarForUpdate, removeCar} from "../../../../store";


const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();
    return (
        <div className={'car'}>
            <b>Model:</b> <u>{model}</u>
            <b>Price:</b> <u>{price}</u>
            <b>Year:</b> <u>{year}</u>
            <button onClick={() => dispatch(getCarForUpdate({car}))}>_</button>
            <button onClick={() => dispatch(removeCar({id}))}>X</button>
        </div>
    );
};

export {Car};