import '../../App.css';
import User from "../User_Post_Comment/User";

import {useEffect, useState} from "react";


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))

    }, []);

    return (
        <div className='users'>

            {users.map(value =>
                <User key = {value.id} id = {value.id} name = {value.name} username = {value.username}
                      email = {value.email} aStreet = {value.address.street} aSuite = {value.address.suite}
                      aCity = {value.address.city} aZipcode = {value.address.zipcode} lat = {value.address.geo.lat}
                      lng = {value.address.geo.lng} phone={value.phone} website = {value.website}
                      cName = {value.company.name} cCP = {value.company.catchPhrase} cBs = {value.company.bs}/>)}

        </div>
    );
}

export default Users;