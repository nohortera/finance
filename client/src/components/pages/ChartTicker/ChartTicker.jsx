import React, {useEffect, useRef} from 'react';
import {useSelector} from "react-redux";
import Chart from 'chart.js/auto';
import chartConfigHelper from "../../../helpers/chartConfig.helper";
import {useParams} from "react-router-dom";
import {updateChart} from "../../../chart/chart";
import './ChartTicker.css'

const ChartTicker = () => {
    const {name} = useParams()
    const tickersData = useSelector(state => state.tickers.data)
    const canvasRef = useRef(null)
    const chartRef = useRef(null)

    useEffect(() => {
        if (!chartRef.current) {
            chartRef.current = new Chart(
                canvasRef.current,
                chartConfigHelper(name, tickersData)
            )
        } else {
            updateChart(chartRef.current, tickersData[0].find(el => el.ticker === name))
        }
    })

    return (
        <div className='chart-wrapper'>
            <canvas ref={canvasRef}></canvas>
        </div>
    );
};

export default ChartTicker;
