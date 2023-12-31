import React, { useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

export function Material() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityAvailableChange = (event) => {
    setQuantityAvailable(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return {
    name,
    cID,
    quantityAvailable,
    price,
    type,
    handleNameChange,
    handleQuantityAvailableChange,
    handlePriceChange,
    handleTypeChange,
  };
}
