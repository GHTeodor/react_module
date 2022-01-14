import {useEffect, useState} from "react";

import '../App.css';
import SpaceX from "./SpaceX";


const AppSpaceX = () => {

    const [spaseX, setSpaseX] = useState([]);

    useEffect(() => {

        fetch('https://api.spacexdata.com/v3/launches/')
            .then(response => response.json())
            .then(flights => setSpaseX(flights.filter(flight => flight.launch_year !== '2020')))

    }, []);

    return (
        <>

            {spaseX.map(value =>
                <SpaceX key={value.flight_number} name={value.mission_name} year={value.launch_year}
                        img={value.links.mission_patch_small}/>)}

        </>
    );
};

export default AppSpaceX;