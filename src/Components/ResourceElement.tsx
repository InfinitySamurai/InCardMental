import React from "react";

interface IProps {
  resourceName: string;
  resourceAmount: number;
}

export function ResourceElement(props: IProps) {
  return <span>{`${props.resourceName}: ${props.resourceAmount} `}</span>;
}
