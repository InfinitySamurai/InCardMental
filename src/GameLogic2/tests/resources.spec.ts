import { Resources } from '../resources'

describe('Game Resources', () => {
    test('Can be instantiated', () => {
        const resources = new Resources()
        expect(resources).toBeTruthy()
    })

    test('New resource tracker has 0 values for resources', () => {
        const resources = new Resources()

        expect(resources.wood).toEqual(0)
        expect(resources.stone).toEqual(0)
        expect(resources.gold).toEqual(0)
    })
})