import React, {FC, useEffect, useState} from 'react';

import './Pages.css';
import {Movies, PagesComponent} from "../components";
import {getAllMovies} from "../store/movies.slice";
import {useAppDispatch, useAppSelector} from "../hooks";


const MoviesPage: FC = () => {
    const {movies, status, error, page} = useAppSelector(state => state["moviesReducer"]);
    const {genre} = useAppSelector(state => state["genresReducer"]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies({page, genre}));
    }, [page, genre]);

    const [timer, setTimer] = useState(true);
    setTimeout(() => {
        setTimer(false);
    }, 700);

    return (
        <div>
            <div className="moviesPage">
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h2>{error}</h2>}
                {movies?.map(movie => <Movies key={movie.id} movies={movie}/>)}
            </div>
            {!timer && <PagesComponent page={page}/>}
        </div>
    );
};

export {MoviesPage};