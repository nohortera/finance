import {screen} from '@testing-library/react'
import IntervalButton from "./IntervalButton";
import {renderWithProvider} from "../../../../tests/helpers/renderWithProvider.helper";

describe('IntervalButton test', () => {
    test('display with 20000 ms value', () => {
        const ms = 20000
        renderWithProvider(<IntervalButton ms={ms} />)
        const intervalBtn = screen.getByTestId('interval-btn')
        expect(intervalBtn).toBeInTheDocument()
        expect(intervalBtn).toHaveTextContent('20s')
    })

    // test('fires dispa')
})
