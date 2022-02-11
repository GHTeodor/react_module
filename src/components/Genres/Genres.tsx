import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {addGenreThunk} from "../../store/genres.slice";
import {firstPageThunk} from "../../store/movies.slice";
import Badges from "./Badges/Badges";
import {useAppDispatch, useAppSelector} from "../../hooks";


const Genres: FC<{ genres: { id: number, name: string } }> = ({genres: {id, name}}) => {

    const {darkMode} = useAppSelector(state => state["moviesReducer"]);
    const dispatch = useAppDispatch();

    return (
        <div className={darkMode ? "genresDark" : "genres"}>
            <Link style={darkMode ? {color: "lightyellow"} : {color: "blue"}}
                  to="/movies" onClick={() => {
                dispatch(addGenreThunk(id));
                dispatch(firstPageThunk(1));
            }}><Badges id={id} name={name}/></Link>
        </div>
    );
};

export {Genres};