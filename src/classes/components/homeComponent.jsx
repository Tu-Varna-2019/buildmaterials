import { signOut } from "aws-amplify/auth";
import React from "react";
import { ComponentStateContext } from "../../contexts/data_models/context";

export function HomeComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const selectFieldCreateUpdateOptions = [
    "Company",
    "MaterialType",
    "Mall",
    "Position",
    "Employee",
    "Sales",
    "Material",
    "Customer",
  ];
  const selectFieldInquery = ["add"];

  const handleSelectFieldUpdateOptions = (event) => {
    switch (event.target.value) {
      case "Company":
        ComponentStateObject.setShowUpdateCompanyPage(true);
        break;
      case "MaterialType":
        ComponentStateObject.setShowUpdateMaterialTypePage(true);
        break;
      case "Mall":
        ComponentStateObject.setShowUpdateMallPage(true);
        break;
      case "Position":
        ComponentStateObject.setShowUpdatePositionPage(true);
        break;
      case "Employee":
        ComponentStateObject.setShowUpdateEmployeePage(true);
        break;
      case "Sales":
        ComponentStateObject.setShowUpdateSalesPage(true);
        break;
      case "Material":
        ComponentStateObject.setShowUpdateMaterialPage(true);
        break;
      case "Customer":
        ComponentStateObject.setShowUpdateCustomerPage(true);
        break;

      default:
        break;
    }
  };

  const handleSelectFieldInqueryOptions = (event) => {
    switch (event.target.value) {
      case "add":
        break;
    }
  };

  const handleSelectFieldCreateOptions = (event) => {
    switch (event.target.value) {
      case "Company":
        ComponentStateObject.setShowCreateCompanyPage(true);
        break;
      case "MaterialType":
        ComponentStateObject.showCreateMaterialTypePage(true);
        break;
      case "Mall":
        ComponentStateObject.setShowCreateMallPage(true);
        break;
      case "Position":
        ComponentStateObject.setShowCreatePositionPage(true);
        break;
      case "Employee":
        ComponentStateObject.setShowCreateEmployeePage(true);
        break;
      case "Sales":
        ComponentStateObject.setShowCreateSalesPage(true);
        break;
      case "Material":
        ComponentStateObject.setShowCreateMaterialPage(true);
        break;
      case "Customer":
        ComponentStateObject.setShowCreateCustomerPage(true);
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
    selectFieldCreateUpdateOptions,
    handleSelectFieldUpdateOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  };
}
