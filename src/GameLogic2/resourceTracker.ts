export interface IResource {
    amount: number
    unlocked: boolean
}

export interface IResources {
    wood: IResource
    stone: IResource
    gold: IResource
}

export class ResourceTracker {
    wood = { amount: 0, unlocked: true }
    stone = { amount: 0, unlocked: true }
    gold = { amount: 0, unlocked: false }

    constructor(resources?: IResources) {
        if (resources) {
            Object.assign(this, resources)
        }
    }

    getResources() {
        const resources: any = {}
        if (this.wood.unlocked) {
            resources.wood = this.wood.amount
        }
        if (this.stone.unlocked) {
            resources.stone = this.stone.amount
        }
        if (this.gold.unlocked) {
            resources.gold = this.gold.amount
        }
        return resources
    }
}
