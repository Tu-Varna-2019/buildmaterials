import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";
import { listMaterials } from "../../graphql/queries";
import { deleteMaterial } from "../../graphql/mutations";

export function Material() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState("");
  const [quantityAvailable, setQuantityAvailable] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");

  const [selectedMaterialID, setSelectedMaterialID] = useState("");
  const [allMaterialIDNames, setAllMaterialIDNames] = useState({});

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  // Fetch all materials
  useEffect(() => {
    async function getAllMaterials() {
      try {
        const response = await client.graphql({
          query: listMaterials,
        });
        response.data.listMaterials.items.forEach((material) => {
          setAllMaterialIDNames((prevState) => ({
            ...prevState,
            [material.id]: material.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    getAllMaterials();
  }, [client, logger]);

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

  const deleteSelectedMaterial = async () => {
    try {
      await client.graphql({
        query: deleteMaterial,
        variables: {
          input: {
            id: selectedMaterialID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return {
    deleteSelectedMaterial,
    selectedMaterialID,
    setSelectedMaterialID,
    allMaterialIDNames,
    setAllMaterialIDNames,
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
