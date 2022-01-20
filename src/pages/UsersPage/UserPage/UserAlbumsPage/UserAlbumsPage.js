import React, {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from "react-router-dom";

import {user_Service} from "../../../../services/user_Service";
import UserAlbums from "../../../../components/Users/UserAlbums/UserAlbums";


const UserAlbumsPage = () => {
    const {id} = useParams();
    const [userAlbums, setUserAlbums] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        if (state)
            user_Service.getUserAlbums(id).then(value => setUserAlbums([...value]));

    }, [id]);

    return (
        <>
            {userAlbums && (
                <>
                    {userAlbums.map(userAlbum => <UserAlbums key={userAlbum.id} userAlbum={userAlbum}/>)}
                    <Outlet/>
                </>
            )}
        </>
    );
};

export {UserAlbumsPage};