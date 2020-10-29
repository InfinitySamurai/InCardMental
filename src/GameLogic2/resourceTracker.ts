export interface IResources {
    wood: number
    stone: number
    gold: number
}

export class ResourceTracker {
    wood = 0
    stone = 0
    gold = 0

    constructor(resources?: IResources) {
        if (resources) {
            Object.assign(this, resources)
        }
    }
}
