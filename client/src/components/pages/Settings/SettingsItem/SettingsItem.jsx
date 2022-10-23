import React from 'react';
import './SettingsItem.css'
import {useDispatch} from "react-redux";
import {updateSettings} from "../../../../store/slices/tickers/tickersSlice";
import fullNameHelper from "../../../../helpers/fullName.helper";

const SettingsItem = ({ ticker }) => {
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(updateSettings(ticker.title))
    }

    return (
        <div className='settings-item__wrapper'>
            <div className='settings-item__title'>
                <h3>{ticker.title}</h3>
                <p>{fullNameHelper(ticker.title)}</p>
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={ticker.show}
                    id={ticker.title}
                    name={ticker.name}
                    className="settings-item__checkbox"
                    onChange={handleChange}
                />
                <label
                    data-testid='settings-label'
                    htmlFor={ticker.title}
                    className="lb1"
                />
            </div>
        </div>
    );
};

export default SettingsItem;
