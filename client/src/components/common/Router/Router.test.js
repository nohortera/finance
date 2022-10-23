import {screen} from '@testing-library/react'
import {renderSetup} from "../../../tests/helpers/renderSetup.helper";

describe('Router test', () => {
    test('/ route', () => {
        renderSetup(null, '/')
        const mainPage = screen.getByTestId('main-page')
        expect(mainPage).toBeInTheDocument()
    })

    test('/settings route', () => {
        renderSetup(null, '/settings')
        const settingsPage = screen.getByTestId('settings-page')
        expect(settingsPage).toBeInTheDocument()
    })

    // test('/chart/:name route', () => {
    //     renderSetup(null, '/chart/AAPL')
    //     const chartPage = screen.getByTestId('chart-page')
    //     expect(chartPage).toBeInTheDocument()
    // })

    test('* route', () => {
        renderSetup(null, '/jbhbhwbcqbqwec')
        const mainPage = screen.getByTestId('main-page')
        expect(mainPage).toBeInTheDocument()
    })

})
