import { Game } from '../game'

describe('Game class', () => {
    test('Can be instantiated', () => {
        const game = new Game()
        expect(game).toBeTruthy()
        expect(game.resources).toBeTruthy()
    })
})
