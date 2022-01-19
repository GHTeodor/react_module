import React from 'react';
import {Link} from "react-router-dom";

import './Users.css'


const Users = ({user}) => {
    const {id, name} = user;

    return (
        <div>
            <Link to={id.toString()} state={user}>{id})  {name}</Link>
        </div>
    );
};

export default Users;