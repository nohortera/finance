import './App.css';
import Header from "./components/common/Header/Header";
import Router from "./components/common/Router/Router";
import io from 'socket.io-client'
import {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateCurrent} from "./store/slices/tickersSlice";
import {BrowserRouter} from "react-router-dom";

function App() {
    const {ms} = useSelector(state => state.interval)
    const dispatch = useDispatch()
    const socket = useRef({})

    // todo: better to create custom hook for socket
    useEffect(() => {
        socket.current = io('http://localhost:4000')
        console.log(socket.current)
        socket.current.on('connect', () => {
            // todo: delete logger
            console.log('Connected to the socket server')
        })
        socket.current.on('ticker', quotes => {
            console.log(quotes)
            dispatch(updateCurrent(quotes))
        })
        socket.current.emit('start')
        return () =>{
            socket.current.close();
        }
    }, [dispatch])

    useEffect(() => {
        socket.current.emit('stop')
        socket.current.emit('start', ms)
    }, [ms])

    // todo: delete useEffect
    useEffect(() => {
        console.log('App rendered')
    })

    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}

export default App;
