import React from "react";
import Paper from "@material-ui/core/Paper";
import { GameCard } from "../GameLogic/GameCard";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 250,
    width: 160
  }
});

interface IProps {
  card: GameCard;
}

export function UiGameCard(props: IProps) {
  const { card } = props;
  const style = useStyles();

  return (
    <Paper className={style.paper}>
      <div>{`Title: ${card.title}`}</div>
      <div>Cost:</div>
      {card.cost.map(cost => {
        return <div>{`${cost.resource.toString()}: ${cost.amount}`}</div>;
      })}
      <div> {`Effect: ${card.description}`}</div>
    </Paper>
  );
}
