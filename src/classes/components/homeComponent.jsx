import { signOut } from "aws-amplify/auth";
import React from "react";
import { ComponentStateContext } from "../../contexts/data_models/context";

export function HomeComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const selectFieldBookARoomOptions = ["Client", "Room", "Registration"];
  const selectFieldInquery = [
    "all available rooms at the current date and time, sorted by room category",
    "booking turnover derived by setting a time period",
    "displaying all names, EGN of customers who occupied rooms in the last year",
  ];
  const selectFieldCreate = ["Room", "Registration"];

  const handleSelectFieldUpdateOptions = (event) => {
    switch (event.target.value) {
      case "Client":
        ComponentStateObject.setShowUpdateClientPage(true);
        break;
      case "Room":
        ComponentStateObject.setShowUpdateRoomPage(true);
        break;
      case "Registration":
        ComponentStateObject.setShowUpdateRegistrationPage(true);
        break;
      default:
        break;
    }
  };

  const handleSelectFieldInqueryOptions = (event) => {
    switch (event.target.value) {
      case "all available rooms at the current date and time, sorted by room category":
        ComponentStateObject.setShowAllSSNs(true); // completely wrong
        break;
      case "booking turnover derived by setting a time period":
        ComponentStateObject.setShowBookingTurnover(true);
        break;
      case "displaying all names, EGN of customers who occupied rooms in the last year":
        ComponentStateObject.setShowAvailableRooms(true);
        break;
      default:
        break;
    }
  };

  const handleSelectFieldCreateOptions = (event) => {
    switch (event.target.value) {
      case "Room":
        ComponentStateObject.setShowCreateRoomPage(true);
        break;
      case "Registration":
        ComponentStateObject.setShowCreateRegistrationPage(true);
        break;
      default:
        console.log("Error: No option selected");
        break;
    }
  };

  // Buttons
  const handleLogOutClick = (event) => {
    signOut();
  };

  return {
    selectFieldBookARoomOptions,
    handleSelectFieldUpdateOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    selectFieldCreate,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  };
}
