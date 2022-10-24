import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import {setupStore} from "./store";
import SocketMock from 'socket.io-mock'
import userEvent from "@testing-library/user-event";
import {renderWithProvider} from "./tests/helpers/renderWithProvider.helper";

describe('App test', () => {
    let connected = false

    test('connection to server', () => {
        const socket = new SocketMock()
        socket.on('start', interval => {
            connected = true
            expect(connected).toBe(true)
        })
        socket.socketClient.emit('start')
    })

    test('page markup', () => {
        render(
            <Provider store={setupStore()}>
                <App />
            </Provider>
        );
        const mainPage = screen.getByTestId('main-page');
        const header = screen.getByTestId('header')
        expect(mainPage).toBeInTheDocument();
        expect(header).toBeInTheDocument()
    });

    test('settings functionality', () => {
        renderWithProvider(<App />)
        expect(screen.getAllByTestId('table-row').length).toBe(6)

        const settingsLink = screen.getByText(/Settings/i)
        expect(settingsLink).toBeInTheDocument()

        userEvent.click(settingsLink)
        expect(screen.getByTestId('settings-page')).toBeInTheDocument()

        const settingsLbl = screen.getAllByTestId('settings-label')
        const homeLink = screen.getByText(/home/i)
        userEvent.click(settingsLbl[0])
        userEvent.click(homeLink)
        expect(screen.getByTestId('main-page')).toBeInTheDocument()
        expect(screen.getAllByTestId('table-row').length).toBe(5)
    })
})




