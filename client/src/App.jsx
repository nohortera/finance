import './App.css';
import Header from "./components/common/Header/Header";
import Router from "./components/common/Router/Router";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {serverStart, serverStop, serverUpdateSettings} from "./store/thunks/serverThunk";

function App() {
    const {ms} = useSelector(state => state.interval)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(serverStart())
        return () => {
            dispatch(serverStop())
        }
    }, [dispatch])

    useEffect(() => {
        dispatch(serverUpdateSettings(ms))
    }, [dispatch, ms])

    return (
        <BrowserRouter>
            <Header />
            <Router />
        </BrowserRouter>
    );
}

export default App;
