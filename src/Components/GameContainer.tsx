import React from "react";

import { CardContainer } from "./CardContainer";
import { ResourceContainer } from "./ResourceContainer";
import { GameCard } from "../GameLogic/GameCard";
import { cardData } from "../GameLogic/Data/CardData";
import Main from "../GameLogic/Main";
import { Resource } from "../GameLogic/Resource";

interface IState {
  game: Main;
}

export class GameContainer extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = { game: new Main() };
  }

  render() {
    const { game } = this.state;
    return (
      <>
        <ResourceContainer
          resources={game.resourceTracker.getUnlockedResourcesList()}
        />
        <CardContainer
          cardHand={[
            new GameCard({
              ...cardData.FARM,
              effect: () =>
                game.resourceTracker.modifyResource(Resource.WOOD, 10)
            }),
            new GameCard(cardData.ALCHEMY),
            new GameCard(cardData.QUARRY),
            new GameCard(cardData.MILL)
          ]}
        />
      </>
    );
  }
}
