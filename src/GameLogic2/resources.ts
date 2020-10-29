export interface IResources {
    wood: number,
    stone: number,
    gold: number
}

export class ResourceTracker {
    resources: IResources = {
        wood: 0,
        stone: 0,
        gold: 0
    }

    constructor(resources?: IResources) {
        if(resources) {
            this.resources = resources
        }
    }
}