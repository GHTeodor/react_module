import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car/Car";
import {getAllCars} from "../../store";


const Cars = () => {
    const {cars, status, error} = useSelector(state => state["carReducer"]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCars());
    }, [dispatch]);

    return (
        <div className={'cars'}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};