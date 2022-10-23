import intervalReducer, {updateInterval} from './intervalSlice'

describe('intervalReducer test', () => {
    let mockedState

    beforeEach(() => {
        mockedState = {
            ms: 5000
        }
    })

    test('updateInterval action with filled state', () => {
        expect(intervalReducer(mockedState, updateInterval(30000))).toEqual({ms: 30000})
    })

    test('updateInterval action with empty state', () => {
        expect(intervalReducer(undefined, updateInterval(15000))).toEqual({ms: 15000})
    })
})
