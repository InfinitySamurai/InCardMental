import Resource from "./Resource";
import Structure from "./Structure";
import Technology from "./Technology";

export interface IEffect {
  effect: () => void;
  description: string;
}

export interface ICost {
  resource: Resource;
  amount: number;
}

export interface ICardInitialValues {
  title: Structure | Technology;
  cost: ICost[];
  effect: IEffect;
}

export class GameCard {
  title: Structure | Technology;
  cost: ICost[];
  effect: IEffect;

  constructor(initialValues: ICardInitialValues) {
    this.title = initialValues.title;
    this.cost = initialValues.cost;
    this.effect = initialValues.effect;
  }
}

const a = new GameCard({
  title: Structure.FARM,
  cost: [{ resource: Resource.WOOD, amount: 5 }],
  effect: { effect: () => true, description: "true thing" }
});
