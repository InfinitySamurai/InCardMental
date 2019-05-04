import React from "react";
import {
  Card,
  CardContent,
  Grid,
  GridList,
  GridListTile,
  Paper
} from "@material-ui/core";

import { GameCard } from "../GameLogic/GameCard";
import { makeStyles } from "@material-ui/styles";
import { UiGameCard } from "./UiGameCard";

export interface IProps {
  cardHand: GameCard[];
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export function CardContainer(props: IProps) {
  const style = useStyles();
  return (
    <Grid container className={style.root} spacing={16}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={16}>
          {props.cardHand.map((card, idx) => {
            return (
              <Grid key={`CardHand${idx}`} item>
                <UiGameCard card={card} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
