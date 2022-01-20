import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Layout.css';


const Layout = () => {
    return (
        <>
            <header>
                <NavLink to="/users"><h3>Users</h3></NavLink>
                <NavLink to="/posts"><h3>Posts</h3></NavLink>
            </header>
            <div className="content">
                <Outlet/>
            </div>
            <footer>
                <small>Ⓡⓔⓐⓒⓣ</small>
            </footer>
        </>
    );
};

export default Layout;