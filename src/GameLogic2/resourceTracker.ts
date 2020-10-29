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
        for (const key in this.resources) {
            const resource = this.resources[key]
            if (resource.unlocked) {
                resources[key] = resource.amount
            }
        }
        return resources
    }
}
