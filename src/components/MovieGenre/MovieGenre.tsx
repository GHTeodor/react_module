import React, {FC, useEffect} from 'react';

import {getInfoThunk} from "../../store/info.slice";
import {useAppDispatch, useAppSelector} from "../../hooks";


const MovieGenre: FC<{ id: number, img: string }> = ({id, img}) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getInfoThunk(id));
    }, [id]);

    const {status, error, genres} = useAppSelector(state => state["infoReducer"]);
    const {darkMode} = useAppSelector(state => state["moviesReducer"]);

    return (
        <div style={{backgroundImage: `url(${img})`, width: "500px", height: "281px"}}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {genres?.map(genre => <u className={darkMode ? "dark-mode" : "light-mode"}
                                     style={{opacity: ".4"}}
                                     key={genre.id}><br/>{genre.name}</u>)}
        </div>
    );
};

export {MovieGenre};