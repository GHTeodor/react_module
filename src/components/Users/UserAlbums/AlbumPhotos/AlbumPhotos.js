import React from 'react';

const AlbumPhotos = ({albumPhoto: {title, thumbnailUrl}}) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export default AlbumPhotos;