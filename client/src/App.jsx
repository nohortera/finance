import './App.css';
import Header from "./components/common/Header/Header";
import Router from "./components/common/Router/Router";
// import io from 'socket.io-client'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {serverStart, serverStop, serverUpdateSettings} from "./store/thunks/startThunk";

function App() {
    const {ms} = useSelector(state => state.interval)
    const dispatch = useDispatch()
    // const socket = useRef({})

    // useEffect(() => {
    //     socket.current = io('http://localhost:4000')
    //     socket.current.on('ticker', quotes => {
    //         dispatch(updateTickersData(quotes))
    //     })
    //     socket.current.emit('start')
    //     return () => {
    //         socket.current.close()
    //     }
    // }, [dispatch])
    //
    // useEffect(() => {
    //     socket.current.emit('stop')
    //     socket.current.emit('start', ms)
    // }, [ms])

    useEffect(() => {
        console.log('start effect')
        dispatch(serverStart())
        return () => {
            dispatch(serverStop())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(serverUpdateSettings(ms))
        return () => {
            dispatch(serverStop())
        }
    }, [dispatch, ms])

    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}

export default App;
