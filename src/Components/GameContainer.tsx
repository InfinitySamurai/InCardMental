import React from "react";

import { CardContainer } from "./CardContainer";
import Resource from "../GameLogic/Resource";
import { ResourceContainer } from "./ResourceContainer";
import Structure from "../GameLogic/Structure";
import Technology from "../GameLogic/Technology";
import { GameCard as UIGameCard } from "../GameLogic/GameCard";

export function GameContainer() {
  return (
    <>
      <ResourceContainer />
      <CardContainer
        cardHand={[
          new UIGameCard({
            title: Structure.FARM,
            cost: [
              { resource: Resource.WOOD, amount: 5 },
              { resource: Resource.STONE, amount: 1 }
            ],
            effect: { effect: () => true, description: "Gives Food" }
          }),
          new UIGameCard({
            title: Structure.MILL,
            cost: [
              { resource: Resource.WOOD, amount: 5 },
              { resource: Resource.STONE, amount: 3 }
            ],
            effect: { effect: () => true, description: "Give Wood" }
          }),
          new UIGameCard({
            title: Structure.QUARRY,
            cost: [
              { resource: Resource.WOOD, amount: 5 },
              { resource: Resource.FOOD, amount: 1 }
            ],
            effect: { effect: () => true, description: "Gives Stone" }
          }),
          new UIGameCard({
            title: Technology.ALCHEMY,
            cost: [
              { resource: Resource.WOOD, amount: 30 },
              { resource: Resource.STONE, amount: 10 }
            ],
            effect: {
              effect: () => true,
              description: "Doubles the food supplied by Farms"
            }
          })
        ]}
      />
    </>
  );
}
