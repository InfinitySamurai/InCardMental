import {Deck} from '../deck'


describe('Deck class', () => {
    test('Can be instantiated', () => {
        const deck = new Deck()
        expect(deck).toBeTruthy()
    })
})