import { Resource } from "../Resource";
import { ResourceStatus } from "../ResourceTracker";

export const initialValues = generateInitialValues();

function generateInitialValues(): Map<Resource, ResourceStatus> {
  const initialValues = new Map();

  initialValues
    .set(Resource.WOOD, { unlocked: true, amount: 1 })
    .set(Resource.FOOD, { unlocked: true, amount: 1 })
    .set(Resource.STONE, { unlocked: true, amount: 0 });

  return initialValues;
}
