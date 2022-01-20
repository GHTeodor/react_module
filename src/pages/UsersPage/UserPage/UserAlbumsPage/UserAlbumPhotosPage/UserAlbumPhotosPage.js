import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {photos_Service} from "../../../../../services/photos_Service";
import AlbumPhotos from "../../../../../components/Users/UserAlbums/AlbumPhotos/AlbumPhotos";


const UserAlbumPhotosPage = () => {
    const [userAlbumPhotosPage, setUserAlbumPhotosPage] = useState([]);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state)
            photos_Service.photosByAlbumId(id).then(value => setUserAlbumPhotosPage(value));

    }, [id]);


    return (
        <>
            {userAlbumPhotosPage && (
                <>
                    {userAlbumPhotosPage.map(albumPhoto => <AlbumPhotos key={albumPhoto.id} albumPhoto={albumPhoto}/>)}
                </>
            )}
        </>
    );
};

export {UserAlbumPhotosPage};