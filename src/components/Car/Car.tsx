import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {deleteCarThunk} from "../../store";

const Car: FC<{ car: ICar }> = ({car: {id, model, price, year}}) => {
    const dispatch = useAppDispatch();

    return (
        <div>
            <b>id:</b> <u>{id}</u>
            <b> model:</b> <u>{model}</u>
            <b> price:</b> <u>{price}</u>
            <b> year:</b> <u>{year}</u>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>X</button>
        </div>
    );
};

export {Car};