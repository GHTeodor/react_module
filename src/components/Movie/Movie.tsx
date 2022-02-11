import React, {FC} from 'react';
import {useLocation} from "react-router-dom";

import '../Components.css';
import {MovieGenre, StarRating} from "../../components";


interface IMovie {
    state: { id: number, title: string, overview: string, vote_count: number, vote_average: number, backdrop_path: string };
}

const Movie: FC = () => {
    const location = useLocation();
    const {state: {id, title, overview, vote_count, vote_average, backdrop_path}} = location as IMovie;
    const img = "https://image.tmdb.org/t/p/w500" + backdrop_path;

    return (
        <div className="movie">
            <MovieGenre id={id} img={img}/>
            <h1>{title}</h1>
            <h2>{overview}</h2>
            <StarRating vote_count={vote_count} vote_average={vote_average}/>
        </div>
    );
};

export {Movie};