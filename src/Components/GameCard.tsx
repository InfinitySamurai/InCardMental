import React from "react";
import Paper from "@material-ui/core/Paper";
import { CardTitle } from "material-ui";

interface IProps {
  title: string;
  resource: string;
  cost: number;
  amount: number;
}

export function GameCard(props: IProps) {
  const { title, resource, cost, amount } = props;
  return (
    <Paper>
      <div>{`Title: ${title}`}</div>
      <div> {`Resource: ${resource}`}</div>
      <div> {`Cost: ${cost}`}</div>
      <div> {`Amount: ${amount}`}</div>
    </Paper>
  );
}
