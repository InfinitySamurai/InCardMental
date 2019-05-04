import React from "react";
import Paper from "@material-ui/core/Paper";
import { GameCard as GameLogicCard } from "../GameLogic/GameCard";

interface IProps {
  card: GameLogicCard;
}

export function GameCard(props: IProps) {
  const { card } = props;
  return (
    <Paper>
      <div>{`Title: ${card.title}`}</div>
      <div>Cost:</div>
      {/* <div>{card.cost}</div> */}
      {card.cost.map(cost => {
        return <div>{`${cost.resource.toString()}: ${cost.amount}`}</div>;
      })}
      <div> {`Effect: ${card.effect.description}`}</div>
    </Paper>
  );
}
