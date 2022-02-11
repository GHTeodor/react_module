import React, {FC} from 'react';

import {buttonPageThunk} from "../../../store/movies.slice";
import '../../Components.css';
import {useAppDispatch, useAppSelector} from "../../../hooks";


const PageNumber: FC<{ arr: number, page: number }> = ({arr, page}) => {
    const dispatch = useAppDispatch();
    const {darkMode} = useAppSelector(state => state["moviesReducer"]);

    return (
        <button onClick={() => dispatch(buttonPageThunk(arr))}
                className={arr === page ? "currentPageNumber" : "notCurrentPageNumber"}
                id={darkMode ? "darkButton" : ""}>
            {arr}
        </button>
    );
};

export {PageNumber};