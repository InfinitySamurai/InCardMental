import Resource from "./Resource";
import Structure from "./Structure";
import Technology from "./Technology";

export interface IGameCard {
  title: Structure | Technology;
  cost: number;
  inputResource: Resource;
  amount: number;
  outputResource?: Resource;
  effect?: () => void;
}
