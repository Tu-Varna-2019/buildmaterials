import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";

import {
  listCompanies,
  listMaterialTypes,
  listMalls,
  listPositions,
} from "../../graphql/queries";

import {
  deleteMaterialType,
  deletePosition,
  deleteMall,
  deleteCompany,
} from "../../graphql/mutations";

export function UpdateDataComponent() {
  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  const [selectedCompanyID, setSelectedCompanyID] = useState("");
  const [selectedMaterialTypeID, setSelectedMaterialTypeID] = useState("");
  const [selectedMallID, setSelectedMallID] = useState("");
  const [selectedPositionID, setSelectedPositionID] = useState("");

  const [companyIDNames, setCompanyIDNames] = useState({});
  const [materialTypeIDNames, setMaterialTypeIDNames] = useState({});
  const [mallIDNames, setMallIDNames] = useState({});
  const [positionIDNames, setPositionIDNames] = useState({});

  // Fetch company
  useEffect(() => {
    async function fetchData() {
      try {
        const responseCompanys = await client.graphql({
          query: listCompanies,
        });

        responseCompanys.data.listCompanies.items.forEach((company) => {
          setCompanyIDNames((prevState) => ({
            ...prevState,
            [company.id]: company.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    fetchData();
  }, []);

  // Fetch material types
  useEffect(() => {
    async function fetchData() {
      try {
        const responseMaterialTypes = await client.graphql({
          query: listMaterialTypes,
        });

        responseMaterialTypes.data.listMaterialTypes.items.forEach(
          (materialType) => {
            setMaterialTypeIDNames((prevState) => ({
              ...prevState,
              [materialType.id]: materialType.name,
            }));
          }
        );
      } catch (error) {
        logger.error(error);
      }
    }
    fetchData();
  }, []);

  // Fetch mall
  useEffect(() => {
    async function fetchData() {
      try {
        const responseMalls = await client.graphql({
          query: listMalls,
        });

        responseMalls.data.listMalls.items.forEach((malls) => {
          setMallIDNames((prevState) => ({
            ...prevState,
            [malls.id]: malls.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    fetchData();
  }, []);

  // Fetch positions
  useEffect(() => {
    async function fetchData() {
      try {
        const responsePositions = await client.graphql({
          query: listPositions,
        });

        responsePositions.data.listPositions.items.forEach((position) => {
          setPositionIDNames((prevState) => ({
            ...prevState,
            [position.id]: position.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    fetchData();
  }, []);

  const deleteSelectedMaterialType = async () => {
    try {
      await client.graphql({
        query: deleteMaterialType,
        variables: {
          input: {
            id: selectedMaterialTypeID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  const deleteSelectedMall = async () => {
    try {
      await client.graphql({
        query: deleteMall,
        variables: {
          input: {
            id: selectedMallID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  const deleteSelectedPosition = async () => {
    try {
      await client.graphql({
        query: deletePosition,
        variables: {
          input: {
            id: selectedPositionID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  const deleteSelectedCompany = async () => {
    try {
      await client.graphql({
        query: deleteCompany,
        variables: {
          input: {
            id: selectedCompanyID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return {
    deleteSelectedMaterialType,
    deleteSelectedMall,
    deleteSelectedPosition,
    deleteSelectedCompany,
    companyIDNames,
    materialTypeIDNames,
    mallIDNames,
    positionIDNames,
    selectedCompanyID,
    setSelectedCompanyID,
    selectedMaterialTypeID,
    setSelectedMaterialTypeID,
    selectedMallID,
    setSelectedMallID,
    selectedPositionID,
    setSelectedPositionID,
  };
}
