import React, { useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

export function Employee() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [molAssigned, setMolAssigned] = useState("");
  const [position, setPosition] = useState("");

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleMolAssignedChange = (event) => {
    setMolAssigned(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  return {
    cID,
    name,
    phone,
    molAssigned,
    position,
    handleNameChange,
    handlePhoneChange,
    handleMolAssignedChange,
    handlePositionChange,
  };
}
