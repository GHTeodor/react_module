import React from 'react';
import {Link} from "react-router-dom";

const UserAlbums = ({userAlbum}) => {
    const {id, title} = userAlbum;

    return (
        <div>
            <Link to={'photos'} state={userAlbum}>
                Title_{id} <i>{title}</i>
            </Link>
        </div>
    );
};

export default UserAlbums;