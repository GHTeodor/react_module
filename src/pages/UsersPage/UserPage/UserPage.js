import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {user_Service} from "../../../services/user_Service";
import User from "../../../components/Users/User";


const UserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            return setUser(state);
        }
        user_Service.getOneById(id).then(value => setUser({...value}));

    }, [id]);

    return (
        <>
            {user && (
                <div>
                    <User key={user.id} user={user}/>
                    <Link to={'posts'} state={{...state}}>
                        <button>Get Posts</button>
                    </Link>
                    <Link to={'albums'} state={{...state}}>
                        <button>Get Albums</button>
                    </Link>

                    <Outlet/>
                </div>
            )}
        </>
    );
};

export {UserPage};