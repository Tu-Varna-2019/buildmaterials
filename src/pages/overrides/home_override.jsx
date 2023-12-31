import React from "react";
import { HomeComponent } from "../../classes/components/homeComponent";
import { DataModelContext } from "../../contexts/data_models/context";

export function FuncHomeOverride() {
  const {
    selectFieldBookARoomOptions,
    handleSelectFieldUpdateOptions,
    selectFieldInquery,
    handleSelectFieldInqueryOptions,
    selectFieldCreate,
    handleSelectFieldCreateOptions,
    handleLogOutClick,
  } = HomeComponent();

  const { ClientObject } = React.useContext(DataModelContext);

  const homeOverride = {
    text_Username: {
      children: ClientObject.name,
    },
    select_field_update: {
      onChange: (event) => handleSelectFieldUpdateOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldBookARoomOptions,
    },
    select_field_inquery: {
      onChange: (event) => handleSelectFieldInqueryOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldInquery,
    },
    select_field_create: {
      onChange: (event) => handleSelectFieldCreateOptions(event),
      style: { backgroundColor: "transparent", color: "transparent" },
      options: selectFieldCreate,
    },
    button_logout: {
      onClick: (event) => handleLogOutClick(event),
    },
  };

  return { homeOverride };
}
