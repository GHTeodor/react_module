import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

import './Layout.css';


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/cars">CARS</NavLink>
                <NavLink to="/users">USERS</NavLink>
                <NavLink to="/posts">POSTS</NavLink>
                <NavLink to="/comments">COMMENTS</NavLink>
            </header>
            <div id="content">
                <Outlet/>
            </div>
            <footer>ᚱΈÂ☾⍑</footer>
        </>
    );
};

export {Layout};