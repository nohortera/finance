import {renderSetup} from "../../../../tests/helpers/renderSetup.helper";
import Navbar from "./Navbar";
import {screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event";

describe('Navbar test', () => {

        test('settings link', () => {
            renderSetup(<Navbar />)
            expect(screen.queryByTestId('settings-page')).not.toBeInTheDocument()

            const settingsLink = screen.getByText(/Settings/i)
            expect(settingsLink).toBeInTheDocument()

            userEvent.click(settingsLink)
            const settingsPage = screen.getByTestId('settings-page')
            expect(settingsPage).toBeInTheDocument()
        })

        test('settings link', () => {
            renderSetup(<Navbar />, '/settings')
            expect(screen.queryByTestId('home-page')).not.toBeInTheDocument()

            const homeLink = screen.getByText(/Home/i)
            expect(homeLink).toBeInTheDocument()

            userEvent.click(homeLink)
            const mainPage = screen.getByTestId('main-page')
            expect(mainPage).toBeInTheDocument()
        })
})
