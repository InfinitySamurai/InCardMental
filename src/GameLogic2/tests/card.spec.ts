import {Card} from '../card'

describe('Card class', () => {
    test('can be instantiated', () => {
        const card = new Card({cost: 1, title: "", description: ""})
        expect(card).toBeTruthy()
    })

    test('Can be instantiated with values', () => {
        const card = new Card({cost: 1, title: "Chop Wood", description: "Fetch +1 wood"})

        expect(card).toBeTruthy()
        expect(card.cost).toBe(1)
        expect(card.title).toBe("Chop Wood")
        expect(card.description).toBe("Fetch +1 wood")
    })
})