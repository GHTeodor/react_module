import {useEffect, useState} from "react";

import './App.css';
import Users from "./components/Users";
import Form from "./components/Form";
import {userService} from "./services/Axios_User_service";


function App() {
    const [users, setUsers] = useState([]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        userService.getUsers().then(value => {
            setUsers([...value]);
            setFiltered([...value]);
        });
    }, []);

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()));
        }
        if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()));
        }
        if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()));
        }
        setFiltered(filterArr);
    };

    return (
        <div>
            <Form getFilter={getFilter}/>
            <Users users={filtered}/>
        </div>
    );
}

export default App;