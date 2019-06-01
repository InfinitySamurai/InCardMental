import React from "react";
import ResourceTracker, { IResourceItem } from "../GameLogic/ResourceTracker";
import { ResourceElement } from "./ResourceElement";

interface IProps {
  resources: IResourceItem[];
}

export function ResourceContainer(props: IProps) {
  const resourceItems = props.resources;
  return (
    <>
      {resourceItems.map(({ name, amount }) => (
        <ResourceElement resourceName={name} resourceAmount={amount} />
      ))}
    </>
  );
}
