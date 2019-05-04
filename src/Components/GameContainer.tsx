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
            effect: { effect: () => true, description: "true thing" }
          })
          // {
          //   cost: 1,
          //   inputResource: Resource.STONE,
          //   amount: 1,
          //   title: Structure.QUARRY
          // },
          // {
          //   cost: 3,
          //   inputResource: Resource.GOLD,
          //   amount: 20,
          //   title: Technology.ALCHEMY
          // }
        ]}
      />
    </>
  );
}
