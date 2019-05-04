import { Structure } from "../Structure";
import { Resource } from "../Resource";
import { Technology } from "../Technology";

export const cardData = {
  MILL: {
    title: Structure.MILL,
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.STONE, amount: 3 }
    ],
    effect: { effect: () => true, description: "Give Wood" }
  },
  QUARRY: {
    title: Structure.QUARRY,
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.FOOD, amount: 1 }
    ],
    effect: { effect: () => true, description: "Gives Stone" }
  },
  ALCHEMY: {
    title: Technology.ALCHEMY,
    cost: [
      { resource: Resource.WOOD, amount: 30 },
      { resource: Resource.STONE, amount: 10 }
    ],
    effect: {
      effect: () => true,
      description: "Doubles the food supplied by Farms"
    }
  },
  FARM: {
    title: Structure.FARM,
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.STONE, amount: 1 }
    ],
    effect: { effect: () => true, description: "Gives Food" }
  }
};
