import React from "react";
import { ComponentStateContext } from "../../contexts/data_models/context";
import {
  CompanyCreateForm,
  CustomerCreateForm,
  EmployeeCreateForm,
  MallCreateForm,
  MaterialCreateForm,
  MaterialTypeCreateForm,
  PositionCreateForm,
  SalesCreateForm,
} from "../../ui-components";

export function CreateFormComponent() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const createForm = [
    {
      key: "Material",
      showPage: ComponentStateObject.showCreateMaterialPage,
      FormComponent: MaterialCreateForm,
      successMessage: "Material created successfully!",
      setShowPage: ComponentStateObject.setShowCreateMaterialPage,
    },
    {
      key: "MaterialType",
      showPage: ComponentStateObject.showCreateMaterialTypePage,
      FormComponent: MaterialTypeCreateForm,
      successMessage: "Material type created successfully!",
      setShowPage: ComponentStateObject.setShowCreateMaterialTypePage,
    },
    {
      key: "Customer",
      showPage: ComponentStateObject.showCreateCustomerPage,
      FormComponent: CustomerCreateForm,
      successMessage: "Customer created successfully!",
      setShowPage: ComponentStateObject.setShowCreateCustomerPage,
    },
    {
      key: "Employee",
      showPage: ComponentStateObject.showCreateEmployeePage,
      FormComponent: EmployeeCreateForm,
      successMessage: "Employee created successfully!",
      setShowPage: ComponentStateObject.setShowCreateEmployeePage,
    },
    {
      key: "Position",
      showPage: ComponentStateObject.showCreatePositionPage,
      FormComponent: PositionCreateForm,
      successMessage: "Position created successfully!",
      setShowPage: ComponentStateObject.setShowCreatePositionPage,
    },
    {
      key: "Mall",
      showPage: ComponentStateObject.showCreateMallPage,
      FormComponent: MallCreateForm,
      successMessage: "Mall created successfully!",
      setShowPage: ComponentStateObject.setShowCreateMallPage,
    },
    {
      key: "Sales",
      showPage: ComponentStateObject.showCreateSalesPage,
      FormComponent: SalesCreateForm,
      successMessage: "Sales created successfully!",
      setShowPage: ComponentStateObject.setShowCreateSalesPage,
    },
    {
      key: "Company",
      showPage: ComponentStateObject.showCreateCompanyPage,
      FormComponent: CompanyCreateForm,
      successMessage: "Company created successfully!",
      setShowPage: ComponentStateObject.setShowCreateCompanyPage,
    },
  ];

  return { createForm };
}
