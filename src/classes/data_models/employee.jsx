import { fetchUserAttributes } from "aws-amplify/auth";
import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";
import { createEmployee } from "../../graphql/mutations";
import { listEmployees, listMalls, listPositions } from "../../graphql/queries";
import { deleteEmployee } from "../../graphql/mutations";

export function Employee() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [molAssigned, setMolAssigned] = useState("");
  const [position, setPosition] = useState("");

  const [selectedEmployeeID, setSelectedEmployeeID] = useState("");
  const [allEmployeeIDNames, setAllEmployeeIDNames] = useState({});

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  // Fetch all employees
  useEffect(() => {
    async function getAllEmployees() {
      try {
        const response = await client.graphql({
          query: listEmployees,
        });
        response.data.listEmployees.items.forEach((employee) => {
          setAllEmployeeIDNames((prevState) => ({
            ...prevState,
            [employee.id]: employee.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    getAllEmployees();
  }, [client, logger]);

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

  const deleteSelectedEmployee = async () => {
    try {
      await client.graphql({
        query: deleteEmployee,
        variables: {
          input: {
            id: selectedEmployeeID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return {
    deleteSelectedEmployee,
    selectedEmployeeID,
    setSelectedEmployeeID,
    allEmployeeIDNames,
    setAllEmployeeIDNames,
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
