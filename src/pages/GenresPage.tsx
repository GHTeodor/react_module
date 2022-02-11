import React, {FC, useEffect} from 'react';

import './Pages.css';
import {getAllGenres} from "../store/genres.slice";
import {Genres} from "../components";
import {useAppDispatch, useAppSelector} from "../hooks";


const GenresPage: FC = () => {
    const {genres, status, error} = useAppSelector(state => state["genresReducer"]);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, []);

    return (
        <div className="genresPage">
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {genres?.map(genre_1 => <Genres key={genre_1.id} genres={genre_1}/>)}
            {genres && <small id="beta_small">*beta works well only on the first pages</small>}
        </div>
    );
};

export {GenresPage};