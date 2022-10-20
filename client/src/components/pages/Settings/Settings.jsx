import React from 'react';
import {useSelector} from "react-redux";
import SettingsItem from "./SettingsItem/SettingsItem";
import './Settings.css'

const Settings = () => {
    const tickers = useSelector(state => state.tickers.settings)

    return (
        <div className='settings-wrapper'>
            <h2>
                Settings
            </h2>
            <div className="settings-items">
                {tickers.map(ticker => <SettingsItem key={ticker.title} ticker={ticker} />)}
            </div>
        </div>
    );
};

export default Settings;
