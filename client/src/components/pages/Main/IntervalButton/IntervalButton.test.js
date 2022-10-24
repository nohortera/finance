import {render, screen} from '@testing-library/react'
import IntervalButton from "./IntervalButton";
import {renderWithProvider} from "../../../../tests/helpers/renderWithProvider.helper";
import {Provider} from "react-redux";
import userEvent from "@testing-library/user-event";
import {renderSetup} from "../../../../tests/helpers/renderSetup.helper";

describe('IntervalButton test', () => {
    test('display with 20000 ms value', () => {
        const ms = 20000
        renderWithProvider(<IntervalButton ms={ms} />)
        const intervalBtn = screen.getByTestId('interval-btn')
        expect(intervalBtn).toBeInTheDocument()
        expect(intervalBtn).toHaveTextContent('20s')
    })

    const mockedState = {
        tickers: {
            data: [],
            settings: []
        },
        interval: {
            ms: 5000
        }
    };
    const mockedStore = {
        getState: () => mockedState,
        subscribe: jest.fn(),
        dispatch: jest.fn(),
    };

    test('fires dispatch', () => {
        render(
            <Provider store={mockedStore}>
                <IntervalButton ms={15000} />
            </Provider>
        )
        const intervalBtn = screen.getByTestId('interval-btn')
        expect(intervalBtn).toBeInTheDocument()
        userEvent.click(intervalBtn)
        expect(mockedStore.dispatch.mock.calls.length).toBe(1)
    })

    test('changes style on select', () => {
        renderSetup()
        const intervalBtn = screen.getByText(/15s/i)
        expect(intervalBtn).toHaveClass('interval-btn')
        userEvent.click(intervalBtn)

        expect(screen.getByText(/15s/i)).toHaveClass('interval-btn_selected')
    })
})
