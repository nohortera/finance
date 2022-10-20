import {createSlice} from "@reduxjs/toolkit";
import {mockedTickers} from "../../mocks/tickers.mock";



const initialState = {
    data: [mockedTickers.map(el => ({...el, increased: true}))],
    settings: mockedTickers.map(el => ({title: el.ticker, show: true}))
}



const tickersSlice = createSlice({
    name: 'tickers',
    initialState,
    reducers: {
        updateCurrent: (state, action) => {
            const newTicker = action.payload.map((el, i) => {
                const increased = el.price > state.data[0][i].price
                return {...el, increased}
            })
            state.data.unshift(newTicker)
        },
        changeSettings: (state, action) => {
            // const index = state.settings.findIndex(el => el.title === action.payload)
            // state.settings[index].show = !state.settings[index].show
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

export const {updateCurrent, changeSettings} = tickersSlice.actions
export default tickersSlice.reducer
