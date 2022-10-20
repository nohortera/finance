import React from 'react';
import './Header.css'
import NavBar from "./NavBar/NavBar";

const Header = () => {
    return (
        <header className='header' data-testid='header'>
            <h1 className='title'>Stocks Inc.</h1>
            <NavBar />
        </header>
    );
};

export default Header;
