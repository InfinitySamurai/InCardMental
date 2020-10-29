import {Hand} from '../hand'


describe('Hand class', () => {
    test('Can be instantiated', () => {
        const hand = new Hand()
        expect(hand).toBeTruthy()
    })
})