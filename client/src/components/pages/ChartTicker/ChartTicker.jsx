import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import chartConfigHelper from "../../../helpers/chartConfig.helper";
import {useParams} from "react-router-dom";
import './ChartTicker.css'

const ChartTicker = () => {
    const {name} = useParams()
    const tickersData = useSelector(state => state.tickers.data)
    const data = useRef(chartConfigHelper(name, tickersData))

    useEffect(() => {
        data.current = chartConfigHelper(name, tickersData)
    }, [name, tickersData])

    return (
        <div className='chart-wrapper' data-testid='chart-page'>
            <Chart type='line' data={data.current} />
        </div>
    );
};

export default ChartTicker;
