import React from 'react';

import './Car.css';


const Car = ({car: {id, model, price, year}, getCarId}) => {

    return (
            <div className='car'>
                <u>model</u>: <i>{model} </i>
                <u>price</u>: <i>{price} </i>
                <u>year</u>: <i>{year} </i>
                <button onClick={()=>getCarId(id)}>X</button>
                <hr/>
            </div>
    );
};

export default Car;