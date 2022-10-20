import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/settings'>Settings</Link>
        </nav>
    );
};

export default NavBar;
