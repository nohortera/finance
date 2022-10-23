import React from 'react';
import './Header.css'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <header className='header' data-testid='header'>
            <h1 className='title'>Stocks Inc.</h1>
            <Navbar />
        </header>
    );
};

export default Header;
