import React from 'react';

import './Cars.css';
import Car from "../Car/Car";


const Cars = ({cars, deleter}) => {

    return (
        <div className='cars'>
            {cars.map(car =>
                <Car key={car.id} car={car} deleter={deleter}/>)}
        </div>
    );
};

export default Cars;
