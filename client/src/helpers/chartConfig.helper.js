const chartConfig = (name, tickers) => {
    const filteredData = tickers.map(el => el.find(set => set.ticker === name)).reverse()
    const labels = filteredData.map(el => {
        return new Date(el.last_trade_time).toLocaleTimeString()
    })
    const colors = filteredData.map(el => el.increased ? 'rgb(230, 244, 234, 0.8)' : 'rgb(252, 232, 230, 0.8)')


    const data = {
        labels,
        datasets: [
            {
                type: 'bar',
                label: 'change',
                data: filteredData.map(el => el.change),
                backgroundColor: colors,
                borderColor: colors,
            },
            {
                type: 'line',
                label: 'price',
                data: filteredData.map(el => el.price),
                backgroundColor: 'rgb(148, 0, 211)',
                borderColor: 'rgb(148, 0, 211)',
            }
        ]
    }

    return data
}

export default chartConfig
