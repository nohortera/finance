import io from 'socket.io-client'
import {updateTickersData} from "../slices/tickers/tickersSlice";

const socket = io('/')
socket.on('error', (error) => {
    console.log(error)
})


export const serverStart = () => dispatch => {
    socket.emit('start')
    socket.on('ticker', quotes => {
        dispatch(updateTickersData(quotes))
    })
}

export const serverUpdateSettings = (ms) => () => {
    socket.emit('stop')
    socket.emit('start', ms)
}

export const serverStop = () => () => {
    socket.close()
}

