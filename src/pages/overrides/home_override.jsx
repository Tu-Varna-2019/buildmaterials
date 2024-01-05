import React from "react";
import { HomeComponent } from "../../classes/components/homeComponent";
import {
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";

export function FuncHomeOverride() {
  const {
    selectFieldCreateUpdateOptions,
    selectFieldReport,
    handleSelectFieldUpdateOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    handleSelectFieldReportOptions,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  } = HomeComponent();

  const { EmployeeObject } = React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);

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
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldInquery,
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

  return { homeOverride };
}
