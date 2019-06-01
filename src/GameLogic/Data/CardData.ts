import { Resource } from "../Resource";

export const cardData = {
  MILL: {
    title: "Mill",
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.STONE, amount: 3 }
    ],
    effect: { effect: () => true },
    description: "Give Wood"
  },
  QUARRY: {
    title: "Quarry",
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.FOOD, amount: 1 }
    ],
    effect: { effect: () => true },
    description: "Gives Stone"
  },
  ALCHEMY: {
    title: "Alchemy",
    cost: [
      { resource: Resource.WOOD, amount: 30 },
      { resource: Resource.STONE, amount: 10 }
    ],
    effect: {
      effect: () => true
    },
    description: "Doubles the food supplied by Farms"
  },
  FARM: {
    title: "Farm",
    cost: [
      { resource: Resource.WOOD, amount: 5 },
      { resource: Resource.STONE, amount: 1 }
    ],
    effect: { effect: () => true },
    description: "Gives Food"
  }
};
