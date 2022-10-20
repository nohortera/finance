import {render, screen} from "@testing-library/react";
import Main from "./Main";
import {Provider} from "react-redux";
import {setupStore} from "../../../store";


describe('Main page FE test', () => {
    test('render table', () => {
        render(
            <Provider store={setupStore()}>
                <Main />
            </Provider>
        )
        const table = screen.getByTestId('table')
        expect(table).toBeInTheDocument()
    })

    test('render rows', () => {
        render(
            <Provider store={setupStore()}>
                <Main />
            </Provider>
        )
        const rows = screen.getAllByTestId('table-row')
        expect(rows.length).toBe(6)
    })

    test('render heading', () => {
        render(
            <Provider store={setupStore()}>
                <Main />
            </Provider>
        )
        const heading = screen.getByText(/All stocks/i)
        expect(heading).toBeInTheDocument()
    })

})
