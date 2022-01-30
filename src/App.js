import {useState} from "react";

import './App.css';
import {Cars, Form} from "./components";


function App() {
    const [carForUpdate, setCarForUpdate] = useState({});

    return (
        <div className="App">
            <Form carForUpdate={carForUpdate}/>
            <hr/>
            <Cars setCarForUpdate={setCarForUpdate}/>
        </div>
    );
}

export default App;