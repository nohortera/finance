import {createSlice} from "@reduxjs/toolkit";
import {mockedTickers} from "../../../mocks/tickers.mock";

const initialState = {
    data: [mockedTickers.map(el => ({...el, increased: true}))],
    settings: mockedTickers.map(el => ({title: el.ticker, show: true}))
}

export const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        updateTickersData: (state, action) => {
            const newTicker = action.payload.map(item => {
                const increased = item.price > state.data[0].find(el => el.ticker === item.ticker).price
                return {...item, increased}
            })
            state.data.unshift(newTicker)
        },
        updateSettings: (state, action) => {
            state.settings.map(el => {
                if (el.title !== action.payload) {
                    return el
                }
                el.show = !el.show
                return el
            })
        }
    }
})

export const {updateTickersData, updateSettings} = tickersSlice.actions
export default tickersSlice.reducer
