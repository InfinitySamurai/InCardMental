import { Game } from '../game'

describe('Game class', () => {
    test('Can be instantiated', () => {
        const game = new Game()
        expect(game).toBeTruthy()
    })

    test('Game resources should exist on instantiation', () => {
        const game = new Game()

        expect(game.resources).toBeTruthy()
    })
})