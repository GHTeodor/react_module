import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Users from "../../components/Users/Users";
import {user_Service} from "../../services/user_Service";
import './UsersPage.css';


const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        user_Service.getAll().then(value => setUsers(value));
    }, []);

    return (
        <div className='usersPage'>
            <div>
                <h1>Users</h1>
                {users.map(user => <Users key={user.id} user={user}/>)}
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {UsersPage};