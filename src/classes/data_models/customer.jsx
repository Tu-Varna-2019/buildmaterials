import React, { useEffect, useState } from "react";
import { HelpersContext } from "../../contexts/data_models/context";
import { listCustomers } from "../../graphql/queries";
import { deleteCustomer } from "../../graphql/mutations";

export function Customer() {
  const [cID, setCID] = useState("");
  const [name, setName] = useState([]);
  const [phone, setPhone] = useState([]);
  const [invoiceStatus, setInvoiceStatus] = useState(false);
  const [bulstat, setBulstat] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [allCustomerIDNames, setAllCustomerIDNames] = useState({});

  const [selectedCustomerID, setSelectedCustomerID] = useState("");

  const { UtilsObject } = React.useContext(HelpersContext);
  const { logger, client } = UtilsObject;

  useEffect(() => {
    async function getAllCustomers() {
      try {
        const response = await client.graphql({
          query: listCustomers,
        });
        response.data.listCustomers.items.forEach((customer) => {
          setAllCustomerIDNames((prevState) => ({
            ...prevState,
            [customer.id]: customer.name,
          }));
        });
      } catch (error) {
        logger.error(error);
      }
    }
    getAllCustomers();
  }, [client, logger]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const handleInvoiceStatusChange = (event) => {
    setInvoiceStatus(event.target.value);
  };

  const handleBulstatChange = (event) => {
    setBulstat(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const deleteSelectedCustomer = async () => {
    try {
      await client.graphql({
        query: deleteCustomer,
        variables: {
          input: {
            id: selectedCustomerID,
          },
        },
      });
    } catch (error) {
      logger.error(error);
    }
  };

  return {
    deleteSelectedCustomer,
    selectedCustomerID,
    setSelectedCustomerID,
    cID,
    setCID,
    name,
    phone,
    invoiceStatus,
    bulstat,
    handleNameChange,
    handleBulstatChange,
    handleCompanyNameChange,
    handlePhoneChange,
    handleInvoiceStatusChange,
    companyName,
    allCustomerIDNames,
    setAllCustomerIDNames,
  };
}
