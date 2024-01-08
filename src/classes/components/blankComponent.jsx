import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";

export function BlankComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);

  const handleExitClick = (event) => {
    UtilsObject.setHomeText("Home");
    Object.keys(ComponentStateObject).forEach((page) => {
      if (typeof ComponentStateObject[page] === "function") {
        ComponentStateObject[page](false);
      }
    });
  };

  return {
    handleExitClick,
  };
}
