import {useEffect, useState} from "react";

import './App.css';
import Forms from "./components/Forms/Forms";
import Cars from "./components/Cars/Cars";
import {carServices} from "./services/axios_CarServices";


function App() {

    const [cars, setCars] = useState([]);
    const [filteredCar, setFilteredCars] = useState([]);
    const [carId, setCarId] = useState(null);
    const [creatorByBtn, setCreatorByBtn] = useState(null);


    useEffect(() => {

        carServices.getAll().then(value => {
            setCars([...value]);
            setFilteredCars([...value]);
        });

        carServices.deleteById(carId).then(value => setCarId(value));
    }, [carId, creatorByBtn]);

    const getFilter = (data) => {
        let filterArr = [...cars];

        if (data.model) {
            filterArr = filterArr.filter(car => car.model.toUpperCase().includes(data.model.toUpperCase()));
        }
        if (data.price) {
            filterArr = filterArr.filter(car => car.price.toString().includes(data.price.toString()));
        }
        if (data.year) {
            filterArr = filterArr.filter(car => car.year.toString().includes(data.year.toString()));
        }
        setFilteredCars(filterArr);
    };

    const getCarId = (id) => {
        setCarId(id);
    };

    return (
        <>
            <Forms getFilter={getFilter} create={setCreatorByBtn}/>
            <br/>
            <Cars cars={filteredCar} getCarId={getCarId} carId={carId}/>
        </>
    );
}

export default App;