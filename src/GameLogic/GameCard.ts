import { Resource } from "./Resource";

export interface ICost {
  resource: Resource;
  amount: number;
}

export interface ICardInitialValues {
  title: string;
  cost: ICost[];
  effect: () => any;
  description: string;
}

export class GameCard {
  title: string;
  cost: ICost[];
  description: string;
  effect: () => any;

  constructor(initialValues: ICardInitialValues) {
    this.title = initialValues.title;
    this.cost = initialValues.cost;
    this.effect = initialValues.effect;
    this.description = initialValues.description;
  }
}
