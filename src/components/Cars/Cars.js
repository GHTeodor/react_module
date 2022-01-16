import React from 'react';

import './Cars.css';
import Car from "../Car/Car";


const Cars = ({cars, getCarId}) => {

    return (
        <div className='cars'>
            {cars.map(car =>
                <Car key={car.id} car={car} getCarId={getCarId}/>)}
        </div>
    );
};

export default Cars;