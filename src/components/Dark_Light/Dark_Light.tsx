import React, {FC} from 'react';

import {darkThemeThunk} from "../../store/movies.slice";
import {useAppDispatch} from "../../hooks";


const DarkLight: FC<{ darkMode: boolean; }> = ({darkMode}) => {
//☀︎ ☽
    const dispatch = useAppDispatch();

    return (
        <div className="container">
            <span style={{color: darkMode ? "grey" : "yellow"}}>☀︎</span>
            <div className="switch-checkbox">
                <label className="switch">
                    <input type="checkbox" onChange={() => dispatch(darkThemeThunk(!darkMode))}/>
                    <span className="slider round"> </span>
                </label>
            </div>
            <span style={{color: darkMode ? "#c96dfd" : "grey"}}>☽</span>
        </div>
    );
};

export {DarkLight};