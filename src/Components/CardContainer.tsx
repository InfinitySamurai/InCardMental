import React from "react";
import {
  Card,
  CardContent,
  Grid,
  GridList,
  GridListTile,
  Paper
} from "@material-ui/core";

import { GameCard as UiGameCard } from "../GameLogic/GameCard";
import { makeStyles } from "@material-ui/styles";
import { GameCard } from "./GameCard";

export interface IProps {
  cardHand: UiGameCard[];
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
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
                <GameCard card={card} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* <Card className={styleClasses.card} raised>
        <CardContent>This is a game card</CardContent>
      </Card>
      <Card className={styleClasses.card} raised>
        <CardContent>This is a game card</CardContent>
      </Card> */}
    </Grid>
  );
}
