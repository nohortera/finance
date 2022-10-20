import React from 'react';
import {useSelector} from "react-redux";
import './Main.css'
import TableRow from "./TableRow/TableRow";
import filterHelper from "../../../helpers/filter.helper";
import IntervalButton from "./IntervalButton/IntervalButton";

const Main = () => {
    const {data: tickers, settings} = useSelector(state => state.tickers)

    const filteredTickers = filterHelper(tickers[0], settings)

    const intervals = [1000, 5000, 15000, 30000]

    return (
        <div className='main-wrapper' data-testid='main'>
            <div className="table-wrapper">
                <h2>Dashboard</h2>
                <table data-testid='table'>
                    <tbody>
                    {/*I use index for key prop just as an example.
                    I know that it`s better to use id or some another unique value*/}
                    {filteredTickers.map((el, i) => <TableRow key={i} ticker={el} />)}
                    </tbody>
                </table>
                <div className='intervals-wrapper'>
                    {intervals.map((el, i) => <IntervalButton key={i} ms={el} />)}
                </div>
            </div>
        </div>
    );
};

export default Main;
