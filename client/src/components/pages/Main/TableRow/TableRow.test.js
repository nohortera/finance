import {renderWithProvider} from "../../../../tests/helpers/renderWithProvider.helper";
import TableRow from "./TableRow";
import {screen} from '@testing-library/react'
import {MemoryRouter} from "react-router-dom";


describe('TableRow test', () => {
    let mockedTicker

    beforeEach(() => {
        mockedTicker = {
            "ticker": "AAPL",
            "exchange": "NASDAQ",
            "price": 279.29,
            "change": 64.52,
            "change_percent": 0.84,
            "dividend": 0.56,
            "yield": 1.34,
            "last_trade_time": "2021-04-30T11:53:21.000Z",
            "increased": false
        }
    })

    test('is in the document', () => {
        renderWithProvider(
            <MemoryRouter>
                <table>
                    <tbody>
                    <TableRow ticker={mockedTicker} />
                    </tbody>
                </table>
            </MemoryRouter>
        )
        const tableRow = screen.getByTestId('table-row')
        expect(tableRow).toBeInTheDocument()
    })

    test('has valid content', () => {
        renderWithProvider(
            <MemoryRouter>
                <table>
                    <tbody>
                    <TableRow ticker={mockedTicker} />
                    </tbody>
                </table>
            </MemoryRouter>
        )
        const priceCell = screen.getByTestId('price-cell')
        const changeCell = screen.getByTestId('change-cell')
        const percentCell = screen.getByTestId('percent-cell')
        expect(priceCell).toBeInTheDocument()
        expect(changeCell).toBeInTheDocument()
        expect(percentCell).toBeInTheDocument()

        expect(priceCell).toHaveTextContent('279.29 $')
        expect(changeCell).toHaveTextContent('-64.52 $')
        expect(percentCell).toHaveTextContent('0.84 %')
    })

    test('has valid styles', () => {
        renderWithProvider(
            <MemoryRouter>
                <table>
                    <tbody>
                    <TableRow ticker={mockedTicker} />
                    </tbody>
                </table>
            </MemoryRouter>
        )
        const changeCell = screen.getByTestId('change-cell')
        expect(changeCell).toHaveClass('red')
    })
})
