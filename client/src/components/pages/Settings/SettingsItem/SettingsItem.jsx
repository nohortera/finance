import React from 'react';
import './SettingsItem.css'
import {useDispatch} from "react-redux";
import {changeSettings} from "../../../../store/slices/tickersSlice";
import fullNameHelper from "../../../../helpers/fullName.helper";

const SettingsItem = ({ ticker }) => {
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(changeSettings(ticker.title))
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
                    htmlFor={ticker.title}
                    className="lb1"
                />
            </div>
        </div>
    );
};

export default SettingsItem;
