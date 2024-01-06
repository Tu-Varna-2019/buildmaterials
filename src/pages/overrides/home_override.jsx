import React from "react";
import { HomeComponent } from "../../classes/components/homeComponent";
import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";

export function FuncHomeOverride() {
  const {
    selectFieldCreateUpdateOptions,
    selectFieldReport,
    handleSelectFieldUpdateOptions,
    handleSelectFieldInqueryOptions,
    handleSelectFieldReportOptions,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  } = HomeComponent();

  const { EmployeeObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const homeOverride = {
    text_page: {
      children: UtilsObject.homeText,
    },
    text_name: {
      children: EmployeeObject.name,
    },
    select_field_create: {
      onChange: (event) => handleSelectFieldCreateOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldCreateUpdateOptions,
    },
    select_field_update: {
      onChange: (event) => handleSelectFieldUpdateOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldCreateUpdateOptions,
    },
    select_field_query: {
      onChange: (event) => handleSelectFieldInqueryOptions(event),
      style: {
        backgroundColor: "transparent",
        color: "transparent",
        // display: "none",
      },
      options: selectFieldCreateUpdateOptions,
    },
    select_field_report: {
      onChange: (event) => handleSelectFieldReportOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldReport,
    },

    button_logout: {
      onClick: (event) => handleLogOutClick(event),
    },
  };

  const componentObjectState = () => {
    return (
      ComponentStateObject.showCreateMaterialPage ||
      ComponentStateObject.showCreateMaterialTypePage ||
      ComponentStateObject.showCreateCompanyPage ||
      ComponentStateObject.showCreateEmployeePage ||
      ComponentStateObject.showCreateCustomerPage ||
      ComponentStateObject.showCreateMallPage ||
      ComponentStateObject.showCreatePositionPage ||
      ComponentStateObject.showCreateSalesPage ||
      /*Update */
      ComponentStateObject.showUpdateMaterialPage ||
      ComponentStateObject.showUpdateMaterialTypePage ||
      ComponentStateObject.showUpdateCompanyPage ||
      ComponentStateObject.showUpdateEmployeePage ||
      ComponentStateObject.showUpdateCustomerPage ||
      ComponentStateObject.showUpdateMallPage ||
      ComponentStateObject.showUpdatePositionPage ||
      ComponentStateObject.showUpdateSalesPage ||
      /*Report */
      ComponentStateObject.reportSalesByEmployee ||
      ComponentStateObject.reportCustomerPurchaseOptions ||
      ComponentStateObject.reportFinancialSumReport ||
      ComponentStateObject.reportAvailableMaterials ||
      ComponentStateObject.reportPopularSoldMaterials
    );
  };

  const componentObjectReportState = () => {
    return (
      ComponentStateObject.reportSalesByEmployee ||
      ComponentStateObject.reportCustomerPurchaseOptions ||
      ComponentStateObject.reportFinancialSumReport ||
      ComponentStateObject.reportAvailableMaterials ||
      ComponentStateObject.reportPopularSoldMaterials
    );
  };

  return { homeOverride, componentObjectState, componentObjectReportState };
}
