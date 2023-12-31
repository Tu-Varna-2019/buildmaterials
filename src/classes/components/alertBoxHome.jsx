import { Alert } from "@aws-amplify/ui-react";
import { HelpersContext } from "../../contexts/data_models/context";
import React from "react";

export function AlertBoxHome() {
  const { UtilsObject } = React.useContext(HelpersContext);

  return (
    <Alert
      variation={UtilsObject.alertBoxVariation}
      textAlign="center"
      heading={UtilsObject.alertBoxHeading}
      isDismissible="true"
      onDismiss={() => UtilsObject.setShowAlertBox(false)}
    >
      {UtilsObject.alertBoxMessage}
    </Alert>
  );
}
