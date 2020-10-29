import { ResourceTracker } from '../resourceTracker'

describe('Resource tracker class', () => {
    test('Can be instantiated', () => {
        const resourceTracker = new ResourceTracker()
        expect(resourceTracker).toBeTruthy()
    })

    test('New resource tracker has 0 values for resources', () => {
        const resourceTracker = new ResourceTracker()

        expect(resourceTracker.wood).toEqual(0)
        expect(resourceTracker.stone).toEqual(0)
        expect(resourceTracker.gold).toEqual(0)
    })

    test('New resource tracker can be instantiated with values', () => {
        const resourceTracker = new ResourceTracker({wood:5, stone:10, gold:50})

        expect(resourceTracker.wood).toEqual(5)
        expect(resourceTracker.stone).toEqual(10)
        expect(resourceTracker.gold).toEqual(50)
    })
})