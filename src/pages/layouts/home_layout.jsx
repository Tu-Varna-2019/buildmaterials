import { FuncHomeOverride } from "../overrides/home_override";
import { View } from "@aws-amplify/ui-react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import React from "react";
import { AlertBoxHome } from "../../classes/components/alertBoxHome";
//import { OutputTableHome } from "../../classes/components/outputTableHome";
//import { OutputTableTurnOver } from "../../classes/components/outputTableTurnOver";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { homeOverride } = FuncHomeOverride();

  // // Create
  // const { createRoomOverride } = FuncCreateRoomOverride();
  // const { createRegistrationOverride } = FuncCreateRegistrationOverride();

  // // Update
  // const { updateClientOOverride } = FuncUpdateClientOverride();
  // const { updateRoomOverride } = FuncUpdateRoomOverride();
  // const { updateRegistrationOOverride } = FuncUpdateRegistrationOverride();

  // // Output table
  // const { outputTableOverride } = FuncOutputTableOverride();

  const { UtilsObject } = React.useContext(HelpersContext);

  return (
    <View position="relative" display="inline-block">
      {UtilsObject.showAlertBox && <AlertBoxHome />}
      {/* <FigHome overrides={homeOverride} /> */}
      {ComponentStateObject.showCreateRoomPage && (
        <View position="absolute" display="block" top="0">
          {/* <FigCreateRoom overrides={createRoomOverride} />*/}
        </View>
      )}
      {ComponentStateObject.showCreateRegistrationPage && (
        <View position="absolute" display="block" top="0">
          {/* <FigCreateRegistration overrides={createRegistrationOverride}> */}
        </View>
      )}
      {ComponentStateObject.showUpdateClientPage && (
        <View position="absolute" display="block" top="0">
          {/* <FigUpdateUser overrides={updateClientOOverride} /> */}
        </View>
      )}
      {ComponentStateObject.showUpdateRoomPage && (
        <View position="absolute" display="block" top="0">
          {/* <FigUpdateRoom overrides={updateRoomOverride} /> */}
        </View>
      )}
      {ComponentStateObject.showUpdateRegistrationPage && (
        <View position="absolute" display="block" top="0">
          {/* <FigUpdateRegistration overrides={updateRegistrationOOverride} /> */}
        </View>
      )}
      {(ComponentStateObject.showAvailableRooms ||
        ComponentStateObject.showAllSSNs) && (
        <View position="absolute" display="block" top="0">
          {/* <FigBlank overrides={outputTableOverride} /> */}

          <View
            position="absolute"
            display="block"
            top="0"
            justifyContent="center"
            right="700px"
          >
            {/* <OutputTableHome /> */}
          </View>
        </View>
      )}
      {ComponentStateObject.showBookingTurnover && (
        <View position="absolute" display="block" top="0">
          {/* <FigBlank overrides={outputTableOverride} /> */}

          <View
            position="absolute"
            display="block"
            top="0"
            justifyContent="center"
            right="700px"
          >
            {/* <OutputTableTurnOver /> */}
          </View>
        </View>
      )}
    </View>
  );
}
