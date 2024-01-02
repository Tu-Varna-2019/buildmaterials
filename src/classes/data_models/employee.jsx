import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";
import { listEmployees, listPositions, listMalls } from "../../graphql/queries";
import { fetchUserAttributes } from "aws-amplify/auth";
import { createEmployee } from "../../graphql/mutations";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export function Employee() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [molAssigned, setMolAssigned] = useState("");
  const [position, setPosition] = useState("");
  const [positionIDNames, setPositionIDNames] = useState({});

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

  // Fetch user attributes
  useEffect(() => {
    async function fetchData() {
      try {
        const userAttributes = await fetchUserAttributes();
        setName(userAttributes.name);
        setPhone(userAttributes.address);
        setMolAssigned(userAttributes["custom:custom:molAssigned"]);
        setPosition(userAttributes["custom:custom:position"]);

        // Fetch all employees to add them to db
        const response = await client.graphql({
          query: listEmployees,
          variables: {
            filter: {
              name: { eq: userAttributes.name },
              // TODO: Fix the equality check for phone number
              //phone: { eq: userAttributes.phone_number },
            },
          },
        });

        if (response.data.listEmployees.items.length === 0) {
          logger.info("No existing employee found. Creating new employee...");

          // List all items
          const responseMall = await client.graphql({
            query: listMalls,
            variables: {
              filter: {
                name: { eq: userAttributes["custom:custom:molAssigned"] },
              },
            },
          });
          const responsePosition = await client.graphql({
            query: listPositions,
            variables: {
              filter: {
                name: { eq: userAttributes["custom:custom:position"] },
              },
            },
          });

          await client.graphql({
            query: createEmployee,
            variables: {
              input: {
                name: userAttributes.name,
                phone: userAttributes.phone_number,
                positionID: responsePosition.data.listPositions.items[0].id,
                mallID: responseMall.data.listMalls.items[0].id,
              },
            },
          });
        } else logger.info("Employee already exists");
      } catch (error) {
        logger.error("Error in fetching/creating client:", error);
      }
    }
    fetchData();
  }, []);

  return {
    positionIDNames,
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
