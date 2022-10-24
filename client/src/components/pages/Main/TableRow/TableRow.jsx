import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {ReactComponent as ArrowUp} from "../../../../assets/svg/arrow-up.svg";
import {ReactComponent as ArrowDown} from "../../../../assets/svg/arrow-down.svg";
import './TableRow.css'
import fullNameHelper from "../../../../helpers/fullName.helper";

const TableRow = ({ ticker }) => {
    const rowRef = useRef(null)
    const navigate = useNavigate()

    const setClass = () => {
        return (ticker.increased ? 'green bg-green' : 'red bg-red') + ' percent-cell__percent'
    }

    const handleClick = () => {
        navigate(`/chart/${ticker.ticker}`)
    }

    return (
        <tr ref={rowRef} data-testid='table-row' onClick={handleClick} >
            <td>
                <div>
                    <p>
                        {ticker.ticker}
                        <br />
                        <sup>{fullNameHelper(ticker.ticker)}</sup>
                    </p>
                </div>
            </td>
            <td className='price-cell' data-testid='price-cell'>
                {ticker.price} $
            </td>
            <td className={ticker.increased ? 'green' : 'red'} data-testid='change-cell'>
                {ticker.increased ? '+' : '-'}{ticker.change} $
            </td>
            <td className='percent-cell' data-testid='percent-cell'>
                <div className={setClass()}>
                    {
                        ticker.increased
                            ? <ArrowUp />
                            : <ArrowDown />
                    }
                    {ticker.change_percent} %
                </div>
            </td>
        </tr>
    );
};

export default TableRow;
