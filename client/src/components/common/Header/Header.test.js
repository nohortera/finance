import {screen} from "@testing-library/react";
import Header from "./Header";
import {renderSetup} from "../../../tests/helpers/renderSetup.helper";

describe('Header test', () => {
    test('display', () => {
        renderSetup(
            <Header />
        )
        const header = screen.getByTestId('header')
        const title = screen.getByText(/stocks inc./i)
        expect(header).toBeInTheDocument()
        expect(title).toBeInTheDocument()
    })
})
