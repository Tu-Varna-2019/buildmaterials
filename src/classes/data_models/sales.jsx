import React, { useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

export function Sales() {
  const [cID, setCID] = useState("");
  const [quantitySold, setQuantitySold] = useState(0);
  const [salesDate, setSalesDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const handleQuantiySoldChange = (event) => {
    setQuantitySold(event.target.value);
  };

  const handleSalesDateChange = (event) => {
    setSalesDate(event.target.value);
  };

  const handleTotalPriceChange = (event) => {
    setTotalPrice(event.target.value);
  };

  return {
    name,
    cID,
    quantitySold,
    totalPrice,
    salesDate,
    handleQuantiySoldChange,
    handleSalesDateChange,
    handleTotalPriceChange,
  };
}
