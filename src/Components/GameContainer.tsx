import React from "react";

import { CardContainer } from "./CardContainer";
import Resource from "../GameLogic/Resource";
import { ResourceContainer } from "./ResourceContainer";
import Structure from "../GameLogic/Structure";
import Technology from "../GameLogic/Technology";

export function GameContainer() {
  return (
    <>
      <ResourceContainer />
      <CardContainer
        cardHand={[
          {
            cost: 1,
            resource: Resource.WHEAT,
            amount: 1,
            title: Structure.FARM
          },
          {
            cost: 1,
            resource: Resource.STONE,
            amount: 1,
            title: Structure.QUARRY
          },
          {
            cost: 3,
            resource: Resource.GOLD,
            amount: 20,
            title: Technology.ALCHEMY
          }
        ]}
      />
    </>
  );
}
