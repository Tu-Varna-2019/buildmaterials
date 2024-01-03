import React from "react";
import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import {
  CompanyUpdateForm,
  CustomerUpdateForm,
  EmployeeUpdateForm,
  MallUpdateForm,
  MaterialTypeUpdateForm,
  MaterialUpdateForm,
  PositionUpdateForm,
  SalesUpdateForm,
} from "../../ui-components";
import { UpdateDataComponent } from "./updateDataComponent";

export function UpdateFormComponent() {
  const {
    selectedCompanyID,
    setSelectedMaterialTypeID,
    setSelectedMallID,
    setSelectedPositionID,
    selectedMaterialTypeID,
    selectedMallID,
    selectedPositionID,
    companyIDNames,
    materialTypeIDNames,
    mallIDNames,
    positionIDNames,
    setSelectedCompanyID,
    deleteSelectedMaterialType,
    deleteSelectedMall,
    deleteSelectedPosition,
    deleteSelectedCompany,
  } = UpdateDataComponent();
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { CustomerObject, EmployeeObject, MaterialObject, SalesObject } =
    React.useContext(DataModelContext);
  const { UtilsObject } = React.useContext(HelpersContext);

  const handleSuccess = (message) => {
    UtilsObject.showAlertBoxFull("success", message, "success");
  };

  const updateForm = [
    {
      showPage: ComponentStateObject.showUpdateMaterialPage,
      FormComponent: MaterialUpdateForm,
      onCancel: () => {
        MaterialObject.deleteSelectedMaterial();
        handleSuccess("Material deleted successfully!");
        ComponentStateObject.setShowUpdateMaterialPage(false);
      },
      onSuccess: () => {
        handleSuccess("Material updated successfully!");
        ComponentStateObject.setShowUpdateMaterialPage(false);
      },
      id: MaterialObject.selectedMaterialID,
      overrides: {
        items: {
          options: Object.values(MaterialObject.allMaterialIDNames),
          onChange: (event) => {
            MaterialObject.setSelectedMaterialID(
              UtilsObject.dictFindKeyByValue(
                MaterialObject.allMaterialIDNames,
                event.target.value
              )
            );
          },
        },
      },
      key: "material",
    },
    {
      showPage: ComponentStateObject.showUpdateMaterialTypePage,
      FormComponent: MaterialTypeUpdateForm,
      onCancel: () => {
        deleteSelectedMaterialType();
        handleSuccess("Material Type deleted successfully!");
        ComponentStateObject.setShowUpdateMaterialTypePage(false);
      },
      onSuccess: () => {
        handleSuccess("Material Type updated successfully!");
        ComponentStateObject.setShowUpdateMaterialTypePage(false);
      },
      id: selectedMaterialTypeID,
      overrides: {
        items: {
          options: Object.values(materialTypeIDNames),
          onChange: (event) => {
            setSelectedMaterialTypeID(
              UtilsObject.dictFindKeyByValue(
                materialTypeIDNames,
                event.target.value
              )
            );
          },
        },
      },
      key: "materialType",
    },
    {
      showPage: ComponentStateObject.showUpdateCustomerPage,
      FormComponent: CustomerUpdateForm,
      onCancel: () => {
        CustomerObject.deleteSelectedCustomer();
        handleSuccess("Customer deleted successfully!");
        ComponentStateObject.setShowUpdateCustomerPage(false);
      },
      onSuccess: () => {
        handleSuccess("Customer updated successfully!");
        ComponentStateObject.setShowUpdateCustomerPage(false);
      },
      id: CustomerObject.selectedCustomerID,
      overrides: {
        items: {
          options: Object.values(CustomerObject.allCustomerIDNames),
          onChange: (event) => {
            CustomerObject.setSelectedCustomerID(
              UtilsObject.dictFindKeyByValue(
                CustomerObject.allCustomerIDNames,
                event.target.value
              )
            );
          },
        },
      },
      key: "customer",
    },
    {
      showPage: ComponentStateObject.showUpdateEmployeePage,
      FormComponent: EmployeeUpdateForm,
      onCancel: () => {
        EmployeeObject.deleteSelectedEmployee();
        handleSuccess("Employee deleted successfully!");
        ComponentStateObject.setShowUpdateEmployeePage(false);
      },
      onSuccess: () => {
        handleSuccess("Employee updated successfully!");
        ComponentStateObject.setShowUpdateEmployeePage(false);
      },
      id: EmployeeObject.selectedEmployeeID,
      overrides: {
        items: {
          options: Object.values(EmployeeObject.allEmployeeIDNames),
          onChange: (event) => {
            EmployeeObject.setSelectedEmployeeID(
              UtilsObject.dictFindKeyByValue(
                EmployeeObject.allEmployeeIDNames,
                event.target.value
              )
            );
          },
        },
      },
      key: "employee",
    },
    {
      showPage: ComponentStateObject.showUpdatePositionPage,
      FormComponent: PositionUpdateForm,
      onCancel: () => {
        deleteSelectedPosition();
        handleSuccess("Position deleted successfully!");
        ComponentStateObject.setShowUpdatePositionPage(false);
      },
      onSuccess: () => {
        handleSuccess("Position updated successfully!");
        ComponentStateObject.setShowUpdatePositionPage(false);
      },
      id: selectedPositionID,
      overrides: {
        items: {
          options: Object.values(positionIDNames),
          onChange: (event) => {
            setSelectedPositionID(
              UtilsObject.dictFindKeyByValue(
                positionIDNames,
                event.target.value
              )
            );
          },
        },
      },
      key: "position",
    },
    {
      showPage: ComponentStateObject.showUpdateMallPage,
      FormComponent: MallUpdateForm,
      onCancel: () => {
        deleteSelectedMall();
        handleSuccess("Mall deleted successfully!");
        ComponentStateObject.setShowUpdateMallPage(false);
      },
      onSuccess: () => {
        handleSuccess("Mall updated successfully!");
        ComponentStateObject.setShowUpdateMallPage(false);
      },
      id: selectedMallID,
      overrides: {
        items: {
          options: Object.values(mallIDNames),
          onChange: (event) => {
            setSelectedMallID(
              UtilsObject.dictFindKeyByValue(mallIDNames, event.target.value)
            );
          },
        },
      },
      key: "mall",
    },
    {
      showPage: ComponentStateObject.showUpdateSalesPage,
      FormComponent: SalesUpdateForm,
      onCancel: () => {
        SalesObject.deleteSelectedSales();
        handleSuccess("Sales deleted successfully!");
        ComponentStateObject.setShowUpdateSalesPage(false);
      },
      onSuccess: () => {
        handleSuccess("Sales updated successfully!");
        ComponentStateObject.setShowUpdateSalesPage(false);
      },
      id: SalesObject.selectedSalesID,
      overrides: {
        items: {
          options: Object.values(SalesObject.allSalesIDDates),
          onChange: (event) => {
            SalesObject.setSelectedSalesID(
              UtilsObject.dictFindKeyByValue(
                SalesObject.allSalesIDDates,
                event.target.value
              )
            );
          },
        },
      },
      key: "sales",
    },
    {
      showPage: ComponentStateObject.showUpdateCompanyPage,
      FormComponent: CompanyUpdateForm,
      onCancel: () => {
        deleteSelectedCompany();
        handleSuccess("Company deleted successfully!");
        ComponentStateObject.setShowUpdateCompanyPage(false);
      },
      onSuccess: () => {
        handleSuccess("Company updated successfully!");
        ComponentStateObject.setShowUpdateCompanyPage(false);
      },
      id: selectedCompanyID,
      overrides: {
        items: {
          options: Object.values(companyIDNames),
          onChange: (event) => {
            setSelectedCompanyID(
              UtilsObject.dictFindKeyByValue(companyIDNames, event.target.value)
            );
          },
        },
      },
      key: "company",
    },
  ];

  return { updateForm };
}
