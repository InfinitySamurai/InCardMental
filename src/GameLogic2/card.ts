export interface ICard {
    cost: number
    title: string
    description: string
}

export class Card {
    cost = 0
    title = ''
    description = 0

    constructor(card: ICard) {
        Object.assign(this, card)
    }
}
