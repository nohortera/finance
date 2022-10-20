import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Main from "../../pages/Main/Main";
import Settings from "../../pages/Settings/Settings";
import ChartTicker from "../../pages/ChartTicker/ChartTicker";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={ <Main /> }/>
            <Route path='/settings' element={ <Settings /> } />
            <Route path='/chart/:name' element={ <ChartTicker /> } />
            <Route path='*' element={ <Navigate to='/' replace={true} />} />
        </Routes>
    );
};

export default Router;
