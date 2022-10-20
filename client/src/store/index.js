import {combineReducers, configureStore} from "@reduxjs/toolkit";
import tickersReducer from "./slices/tickersSlice";
import intervalReducer from "./slices/intervalSlice";

const rootReducer = combineReducers({
    tickers: tickersReducer,
    interval: intervalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export const store = setupStore()
