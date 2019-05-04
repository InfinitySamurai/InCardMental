import React from "react";

import { CardContainer } from "./CardContainer";
import { ResourceContainer } from "./ResourceContainer";
import { GameCard } from "../GameLogic/GameCard";
import { cardData } from "../GameLogic/Data/CardData";

export function GameContainer() {
  return (
    <>
      <ResourceContainer />
      <CardContainer
        cardHand={[
          new GameCard(cardData.FARM),
          new GameCard(cardData.ALCHEMY),
          new GameCard(cardData.QUARRY),
          new GameCard(cardData.MILL)
        ]}
      />
    </>
  );
}
