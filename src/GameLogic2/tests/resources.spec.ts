import { ResourceTracker } from '../resources'

describe('Game Resources', () => {
    test('Can be instantiated', () => {
        const resourceTracker = new ResourceTracker()
        expect(resourceTracker).toBeTruthy()
    })

    test('New resource tracker has 0 values for resources', () => {
        const resourceTracker = new ResourceTracker()

        expect(resourceTracker.resources.wood).toEqual(0)
        expect(resourceTracker.resources.stone).toEqual(0)
        expect(resourceTracker.resources.gold).toEqual(0)
    })

    test('New resource tracker can be instantiated with values', () => {
        const resourceTracker = new ResourceTracker({wood:5, stone:10, gold:50})

        expect(resourceTracker.resources.wood).toEqual(5)
        expect(resourceTracker.resources.stone).toEqual(10)
        expect(resourceTracker.resources.gold).toEqual(50)
    })
})