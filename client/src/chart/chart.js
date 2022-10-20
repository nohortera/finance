// import Chart from "chart.js/auto";
//
// export const createChart = (canvas, config) => {
//     return new Chart(canvas, config)
// }

export const updateChart = (chart, data) => {
    chart.data.labels.push(new Date(data.last_trade_time).toLocaleTimeString())
    const changeDataset = chart.data.datasets[0]
    const priceDataset = chart.data.datasets[1]
    changeDataset.data.push(data.change)
    changeDataset.backgroundColor.push(data.increased ? 'rgb(230, 244, 234, 0.8)' : 'rgb(252, 232, 230, 0.8)')
    changeDataset.borderColor.push(data.increased ? 'rgb(230, 244, 234, 0.8)' : 'rgb(252, 232, 230, 0.8)')
    priceDataset.data.push(data.price)
    chart.update()
}
