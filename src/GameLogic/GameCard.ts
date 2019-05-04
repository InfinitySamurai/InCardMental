import { Resource } from "./Resource";
import { Structure } from "./Structure";
import { Technology } from "./Technology";

export interface IEffect {
  effect: () => void;
  description: string;
}

export interface ICost {
  resource: Resource;
  amount: number;
}

export interface ICardInitialValues {
  title: string;
  cost: ICost[];
  effect: IEffect;
}

export class GameCard {
  title: string;
  cost: ICost[];
  effect: IEffect;

  constructor(initialValues: ICardInitialValues) {
    this.title = initialValues.title;
    this.cost = initialValues.cost;
    this.effect = initialValues.effect;
  }
}
