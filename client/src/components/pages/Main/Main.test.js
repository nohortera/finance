import {screen} from "@testing-library/react";
import {renderSetup} from "../../../tests/helpers/renderSetup.helper";


describe('Main test', () => {

    test('render table', () => {
        renderSetup()

        const table = screen.getByTestId('table')
        expect(table).toBeInTheDocument()
    })

    test('render rows', () => {
        renderSetup()

        const rows = screen.getAllByTestId('table-row')
        expect(rows.length).toBe(6)
    })

    test('render heading', () => {
        renderSetup()

        const heading = screen.getByText(/Dashboard/i)
        expect(heading).toBeInTheDocument()
    })
})
