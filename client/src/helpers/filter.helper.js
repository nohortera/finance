const filter = (tickers, settings) => {
    const filteredSettings = settings.filter(el => el.show).map(el => el.title)
    return tickers.filter(el => filteredSettings.includes(el.ticker))
}

export default filter
