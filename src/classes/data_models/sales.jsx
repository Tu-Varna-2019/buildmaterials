import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";
import { listSales } from "../../graphql/queries";
import { deleteSales } from "../../graphql/mutations";

export function Sales() {
  const [cID, setCID] = useState("");
  const [quantitySold, setQuantitySold] = useState(0);
  const [salesDate, setSalesDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  const [selectedSalesID, setSelectedSalesID] = useState("");
  const [allSalesIDDates, setAllSalesIDDates] = useState({});

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  // Fetch all sales
  useEffect(() => {
    async function getAllSales() {
      try {
        const response = await client.graphql({
          query: listSales,
        });
        response.data.listSales.items.forEach((sale) => {
          setAllSalesIDDates((prevState) => ({
            ...prevState,
            [sale.id]: sale.salesDate,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    getAllSales();
  }, [client, logger]);

  const handleQuantiySoldChange = (event) => {
    setQuantitySold(event.target.value);
  };

  const handleSalesDateChange = (event) => {
    setSalesDate(event.target.value);
  };

  const handleTotalPriceChange = (event) => {
    setTotalPrice(event.target.value);
  };

  const deleteSelectedSales = async () => {
    try {
      await client.graphql({
        query: deleteSales,
        variables: {
          input: {
            id: selectedSalesID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return {
    deleteSelectedSales,
    selectedSalesID,
    setSelectedSalesID,
    allSalesIDDates,
    setAllSalesIDDates,
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
