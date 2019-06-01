import { Resource } from "./Resource";

export interface ResourceStatus {
  unlocked: boolean;
  amount: number;
}

export interface IResourceItem {
  name: string;
  amount: number;
}

export default class ResourceTracker {
  resources: Map<Resource, ResourceStatus>;

  constructor(initialResources: Map<Resource, ResourceStatus>) {
    this.resources = initialResources;
  }

  getUnlockedResourcesList() {
    const resourceList: IResourceItem[] = [];
    this.resources.forEach((resource, key) => {
      if (resource.unlocked) {
        resourceList.push({ name: key, amount: resource.amount });
      }
    });

    return resourceList;
  }

  modifyResource(resource: Resource, amount: number) {
    this.resources.set(resource, { unlocked: true, amount });
  }
}
