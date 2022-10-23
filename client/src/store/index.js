import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tickersReducer from "./slices/tickers/tickersSlice";
import intervalReducer from "./slices/interval/intervalSlice";

const rootReducer = combineReducers({
    tickers: tickersReducer,
    interval: intervalReducer
})

export const setupStore = (initialState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState
    })
}

export const store = setupStore()
