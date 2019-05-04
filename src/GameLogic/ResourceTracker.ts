import Resource from "./Resource";

export interface ResourceStatus {
  unlocked: boolean;
  amount: number;
}

export default class ResourceTracker {
  Resources: Map<Resource, ResourceStatus>;

  constructor(initialResources: Map<Resource, ResourceStatus>) {
    this.Resources = initialResources;
  }
}
