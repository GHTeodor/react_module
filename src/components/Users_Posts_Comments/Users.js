import {useEffect, useState} from "react";

import './Users_Posts_Comments.css';
import User from "../User_Post_Comment/User";
import {User_service} from "../../services/User_service";


function Users({getUserId}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        User_service.getAll().then(value => setUsers(value));

    }, []);

    return (
        <div className='users'>

            {users.map(value =>
                <User key={value.id} user={value} cName={value.company.name} getUserId={getUserId}/>)}
        </div>
    );
}

export default Users;