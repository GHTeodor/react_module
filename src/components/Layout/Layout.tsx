import React, {FC} from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';
import '../Dark_Light/Dark_Light.css';
import {DarkLight} from "../Dark_Light/Dark_Light";
import {useAppSelector} from "../../hooks";


const Layout: FC = () => {
    const {darkMode} = useAppSelector(state => state["moviesReducer"]);

    return (
        <>
            <header>
                <NavLink to={"/movies"}>Movies</NavLink>
                <NavLink to={"/genres"}>Genres</NavLink>
                <DarkLight darkMode={darkMode}/>
            </header>
            <div id="content" className={darkMode ? "dark-mode" : "light-mode"}>
                <Outlet/>
                <footer>
                    🅃🄷🄴 – 🄼❄🅅🄸🄴 — 🄳🄱
                </footer>
            </div>
        </>
    );
};

export {Layout};