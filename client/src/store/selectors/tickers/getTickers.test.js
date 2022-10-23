import {getTickers} from './getTickers'
import {mockedTickers} from "../../../mocks/tickers.mock";

describe('Tickers selector test', () =>{
    const mockedState = {
        tickers: {
            data: [
                [
                    {
                        "ticker": "AAPL",
                        "exchange": "NASDAQ",
                        "price": 279.29,
                        "change": 64.52,
                        "change_percent": 0.84,
                        "dividend": 0.56,
                        "yield": 1.34,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": false
                    }
                ]
            ],
            settings: [
                {
                    "title": 'AAPL',
                    "show": true
                }
            ]
        },
        interval: {
            ms: 5000
        }
    }

    test('work with empty state', () => {
        expect(getTickers({})).toEqual({
            data: [mockedTickers.map(el => ({...el, increased: true}))],
            settings: mockedTickers.map(el => ({title: el.ticker, show: true}))
        })
    })

    test('work with filled state', () => {
        expect(getTickers(mockedState).data[0][0].yield).toBe(1.34)
    })
})
