import {getInterval} from "./getInterval";

describe('Interval selector test', () =>{
    test('work with empty state', () => {
        expect(getInterval({})).toEqual({ms: 5000})
    })

    test('work with filled state', () => {
        expect(getInterval({interval: {ms: 15000}})).toEqual({ms: 15000})
    })
})
