import React from 'react';

import './AlbumPhotos.css'


const AlbumPhotos = ({albumPhoto: {title, thumbnailUrl}}) => {

    return (
        <div className='albumPhotos'>
            <h2>{title}</h2>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export default AlbumPhotos;