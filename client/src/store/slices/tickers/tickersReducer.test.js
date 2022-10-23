import tickersReducer, {updateSettings, updateTickersData} from "./tickersSlice";

describe('tickersReducer test', () => {
    let mockedState

    beforeEach(() => {
        mockedState = {
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
                    },
                    {
                        "ticker": "GOOGL",
                        "exchange": "NASDAQ",
                        "price": 237.08,
                        "change": 154.38,
                        "change_percent": 0.10,
                        "dividend": 0.46,
                        "yield": 1.18,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": true
                    }
                ]
            ],
            settings: [
                {
                    "title": 'AAPL',
                    "show": true
                },
                {
                    "title": "GOOGL",
                    "show": false
                }
            ]
        }
    })

    test('updateTickersData action with filled state', () => {
        const newTickersData = [
            {
                "ticker": "AAPL",
                "exchange": "NASDAQ",
                "price": 172,
                "change": 64.52,
                "change_percent": 0.84,
                "dividend": 0.56,
                "yield": 1.34,
                "last_trade_time": "2021-04-30T11:53:21.000Z",
            },
            {
                "ticker": "GOOGL",
                "exchange": "NASDAQ",
                "price": 208.44,
                "change": 75.38,
                "change_percent": 0.10,
                "dividend": 0.46,
                "yield": 1.18,
                "last_trade_time": "2021-04-30T11:53:21.000Z",
            }
        ]
        const stateWithUpdatedTickersData = {
            data: [
                [
                    {
                        "ticker": "AAPL",
                        "exchange": "NASDAQ",
                        "price": 172,
                        "change": 64.52,
                        "change_percent": 0.84,
                        "dividend": 0.56,
                        "yield": 1.34,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": false
                    },
                    {
                        "ticker": "GOOGL",
                        "exchange": "NASDAQ",
                        "price": 208.44,
                        "change": 75.38,
                        "change_percent": 0.10,
                        "dividend": 0.46,
                        "yield": 1.18,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": false
                    }
                ],
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
                    },
                    {
                        "ticker": "GOOGL",
                        "exchange": "NASDAQ",
                        "price": 237.08,
                        "change": 154.38,
                        "change_percent": 0.10,
                        "dividend": 0.46,
                        "yield": 1.18,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": true
                    }
                ]
            ],
            settings: [
                {
                    "title": 'AAPL',
                    "show": true
                },
                {
                    "title": "GOOGL",
                    "show": false
                }
            ]
        }

        expect(tickersReducer(mockedState, updateTickersData(newTickersData))).toEqual(stateWithUpdatedTickersData)
    })

    test('updateSettings action with filled state', () => {
        const stateWithUpdatedSettings = {
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
                    },
                    {
                        "ticker": "GOOGL",
                        "exchange": "NASDAQ",
                        "price": 237.08,
                        "change": 154.38,
                        "change_percent": 0.10,
                        "dividend": 0.46,
                        "yield": 1.18,
                        "last_trade_time": "2021-04-30T11:53:21.000Z",
                        "increased": true
                    }
                ]
            ],
            settings: [
                {
                    "title": 'AAPL',
                    "show": true
                },
                {
                    "title": "GOOGL",
                    "show": true
                }
            ]
        }

        expect(tickersReducer(mockedState, updateSettings('GOOGL'))).toEqual(stateWithUpdatedSettings)
    })
})
