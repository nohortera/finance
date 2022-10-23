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
                label: 'change',
                data: filteredData.map(el => el.change),
                backgroundColor: colors,
                borderColor: colors,
                type: 'bar'
            },
            {
                label: 'price',
                data: filteredData.map(el => el.price),
                backgroundColor: 'rgb(148, 0, 211)',
                borderColor: 'rgb(148, 0, 211)',
            }
        ]
    }

    const config = {
        type: 'line',
        data: data,
        options: {
            plugins: {
                title: {
                    display: true,
                    text: name
                }
            },
            scales: {
                y: {
                    stacked: true
                }
            }
        },
    };

    return config
}

export default chartConfig
