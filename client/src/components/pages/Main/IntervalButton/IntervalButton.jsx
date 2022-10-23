import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateInterval} from "../../../../store/slices/interval/intervalSlice";
import './IntervalButton.css'

const IntervalButton = ({ ms }) => {
    const interval = useSelector(state => state.interval)
    const dispatch = useDispatch()

    const handleClick = () => {
        if (interval.ms !== ms) dispatch(updateInterval(ms))
    }

    return (
        <button
            onClick={handleClick}
            className={ms === interval.ms ? 'interval-btn_selected' : 'interval-btn'}
            data-testid='interval-btn'
        >
            {ms / 1000}s
        </button>
    );
};

export default IntervalButton;
