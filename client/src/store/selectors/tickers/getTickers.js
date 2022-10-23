import {mockedTickers} from "../../../mocks/tickers.mock";

export const getTickers = state => state?.tickers || {
    data: [mockedTickers.map(el => ({...el, increased: true}))],
    settings: mockedTickers.map(el => ({title: el.ticker, show: true}))
}
