import { ResourceTracker } from '../resourceTracker'

describe('Resource tracker class', () => {
    test('Can be instantiated', () => {
        const resourceTracker = new ResourceTracker()
        expect(resourceTracker).toBeTruthy()
    })

    test('New resource tracker has 0 values for resources', () => {
        const resourceTracker = new ResourceTracker()

        expect(resourceTracker.wood.amount).toEqual(0)
        expect(resourceTracker.stone.amount).toEqual(0)
        expect(resourceTracker.gold.amount).toEqual(0)
    })

    test('New resource tracker can be instantiated with values', () => {
        const resourceTracker = new ResourceTracker({
            wood: { amount: 5, unlocked: true },
            stone: { amount: 10, unlocked: true },
            gold: { amount: 50, unlocked: false }
        })

        expect(resourceTracker.wood).toEqual({ amount: 5, unlocked: true })
        expect(resourceTracker.stone).toEqual({ amount: 10, unlocked: true })
        expect(resourceTracker.gold).toEqual({ amount: 50, unlocked: false })
    })

    test('Can retrieve all unlocked resources from the resource tracker', () => {
        const resourceTracker = new ResourceTracker({
            wood: { amount: 5, unlocked: true },
            stone: { amount: 10, unlocked: true },
            gold: { amount: 50, unlocked: false }
        })

        expect(resourceTracker.getResources()).toEqual({ wood: 5, stone: 10 })
    })

    test("Won't retrieve any resources from the resource tracker if none are unlocked", () => {
        const resourceTracker = new ResourceTracker({
            wood: { amount: 5, unlocked: false },
            stone: { amount: 10, unlocked: false },
            gold: { amount: 50, unlocked: false }
        })

        expect(resourceTracker.getResources()).toEqual({})
    })
})
