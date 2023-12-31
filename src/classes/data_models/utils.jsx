import { generateClient } from "aws-amplify/api";
import { ConsoleLogger } from "aws-amplify/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

export function Utils() {
  const logger = new ConsoleLogger("Amplify_Log", "INFO");
  const client = generateClient();
  const navigate = useNavigate();

  const [showAlertBox, setShowAlertBox] = React.useState(false);
  const [alertBoxMessage, setAlertBoxMessage] = React.useState("");
  const [alertBoxHeading, setAlertBoxHeading] = React.useState("");
  const [alertBoxVariation, setAlertBoxVariation] = React.useState("");
  const [tableResultTurnOver, setTableResultTurnOver] = React.useState(null);

  const showAlertBoxFull = (heading, message, variation) => {
    setAlertBoxHeading(heading);
    setAlertBoxMessage(message);
    setAlertBoxVariation(variation);
    setShowAlertBox(true);
  };

  const toAWSDateFormat = (isoDateTime) => {
    const dateObject = new Date(isoDateTime);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    toAWSDateFormat,
    showAlertBoxFull,
    showAlertBox,
    setShowAlertBox,
    alertBoxHeading,
    alertBoxMessage,
    alertBoxVariation,
    setAlertBoxHeading,
    setAlertBoxMessage,
    setAlertBoxVariation,
    client,
    navigate,
    logger,
    tableResultTurnOver,
    setTableResultTurnOver,
  };
}
