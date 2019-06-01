import ResourceTracker from "./ResourceTracker";
import { initialValues } from "./Data/ResourceInitialValues";

export default class Main {
  resourceTracker: ResourceTracker;

  constructor() {
    this.resourceTracker = new ResourceTracker(initialValues);
  }
}
