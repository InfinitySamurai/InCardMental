export interface IResource {
    amount: number
    unlocked: boolean
}

interface IResourceMap {
    [key: string]: IResource
}

export class ResourceTracker {
    resources: IResourceMap = {
        wood: { amount: 0, unlocked: true },
        stone: { amount: 0, unlocked: true },
        gold: { amount: 0, unlocked: false }
    }

    constructor(resources?: IResourceMap) {
        if (resources) {
            for (const key in resources) {
                this.resources[key] = resources[key]
            }
        }
    }

    getResources() {
        const resources: any = {}
        if (this.resources.wood.unlocked) {
            resources.wood = this.resources.wood.amount
        }
        if (this.resources.stone.unlocked) {
            resources.stone = this.resources.stone.amount
        }
        if (this.resources.gold.unlocked) {
            resources.gold = this.resources.gold.amount
        }
        return resources
    }
}
