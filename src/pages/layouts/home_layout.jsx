import { Flex, View } from "@aws-amplify/ui-react";
import React from "react";
import { AlertBoxHome } from "../../classes/components/alertBoxHome";
import {
  ComponentStateContext,
  DataModelContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import {
  CompanyCreateForm,
  CompanyUpdateForm,
  CustomerCreateForm,
  CustomerUpdateForm,
  EmployeeCreateForm,
  EmployeeUpdateForm,
  MallCreateForm,
  MallUpdateForm,
  MaterialCreateForm,
  MaterialTypeCreateForm,
  MaterialTypeUpdateForm,
  MaterialUpdateForm,
  PositionCreateForm,
  PositionUpdateForm,
  SalesCreateForm,
  SalesUpdateForm,
} from "../../ui-components";
import FigBlank from "../../ui-components/FigBlank";
import FigHome from "../../ui-components/FigHome";
import { BlankOverride } from "../overrides/blank_override";
import { FuncHomeOverride } from "../overrides/home_override";
import { UpdateDataComponent } from "../../classes/components/updateDataComponent";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { homeOverride } = FuncHomeOverride();
  const { blankOverride } = BlankOverride();
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

  const { UtilsObject } = React.useContext(HelpersContext);
  const { CustomerObject, EmployeeObject, MaterialObject, SalesObject } =
    React.useContext(DataModelContext);

  const handleSuccess = (message) => {
    UtilsObject.showAlertBoxFull("success", message, "success");
  };

  return (
    <Flex position="relative" display="inline-block">
      {UtilsObject.showAlertBox && <AlertBoxHome />}
      <FigHome overrides={homeOverride} />
      {
        /* Create */
        (ComponentStateObject.showCreateMaterialPage ||
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
          ComponentStateObject.showUpdateSalesPage) && (
          <View
            position="absolute"
            display="block"
            top="17%"
            zindex={1}
            justifyContent="center"
          >
            <FigBlank overrides={blankOverride} />

            <View
              position="absolute"
              display="block"
              top="0"
              justifyContent="center"
              right="820px"
            >
              {/* Create form */}

              {ComponentStateObject.showCreateMaterialPage && (
                <MaterialCreateForm
                  onSuccess={() => {
                    handleSuccess("Material created successfully!");
                    ComponentStateObject.setShowCreateMaterialPage(false);
                  }}
                />
              )}

              {ComponentStateObject.showCreateMaterialTypePage && (
                <MaterialTypeCreateForm
                  onSuccess={() => {
                    handleSuccess("Material type created successfully!");
                    ComponentStateObject.setShowCreateMaterialTypePage(false);
                  }}
                />
              )}

              {ComponentStateObject.showCreateCustomerPage && (
                <CustomerCreateForm
                  onSuccess={() => {
                    handleSuccess("Customer created successfully!");
                    ComponentStateObject.setShowCreateCustomerPage(false);
                  }}
                />
              )}
              {ComponentStateObject.showCreateEmployeePage && (
                <EmployeeCreateForm
                  onSuccess={() => {
                    handleSuccess("Employee created successfully!");
                    ComponentStateObject.setShowCreateEmployeePage(false);
                  }}
                />
              )}

              {ComponentStateObject.showCreatePositionPage && (
                <PositionCreateForm
                  onSuccess={() => {
                    handleSuccess("Position created successfully!");
                    ComponentStateObject.setShowCreatePositionPage(false);
                  }}
                />
              )}
              {ComponentStateObject.showCreateMallPage && (
                <MallCreateForm
                  onSuccess={() => {
                    handleSuccess("Mall created successfully!");
                    ComponentStateObject.setShowCreateMallPage(false);
                  }}
                />
              )}

              {ComponentStateObject.showCreateSalesPage && (
                <SalesCreateForm
                  onSuccess={() => {
                    handleSuccess("Sales created successfully!");
                    ComponentStateObject.setShowCreateSalesPage(false);
                  }}
                />
              )}

              {ComponentStateObject.showCreateCompanyPage && (
                <CompanyCreateForm
                  onSuccess={() => {
                    handleSuccess("Company created successfully!");
                    ComponentStateObject.setShowCreateCompanyPage(false);
                  }}
                />
              )}

              {/*Update form */}

              {ComponentStateObject.showUpdateMaterialPage && (
                <MaterialUpdateForm
                  onCancel={() => {
                    MaterialObject.deleteSelectedMaterial();
                    handleSuccess("Material deleted successfully!");
                    ComponentStateObject.setShowUpdateMaterialPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Material updated successfully!");
                    ComponentStateObject.setShowUpdateMaterialPage(false);
                  }}
                  id={MaterialObject.selectedMaterialID}
                  overrides={{
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
                  }}
                />
              )}
              {ComponentStateObject.showUpdateMaterialTypePage && (
                <MaterialTypeUpdateForm
                  onCancel={() => {
                    deleteSelectedMaterialType();
                    handleSuccess("Material Type deleted successfully!");
                    ComponentStateObject.setShowUpdateMaterialTypePage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Material Type updated successfully!");
                    ComponentStateObject.setShowUpdateMaterialTypePage(false);
                  }}
                  id={selectedMaterialTypeID}
                  overrides={{
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
                  }}
                />
              )}

              {ComponentStateObject.showUpdateCustomerPage && (
                <CustomerUpdateForm
                  onCancel={() => {
                    CustomerObject.deleteSelectedCustomer();
                    handleSuccess("Customer deleted successfully!");
                    ComponentStateObject.setShowUpdateCustomerPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Customer updated successfully!");
                    ComponentStateObject.setShowUpdateCustomerPage(false);
                  }}
                  id={CustomerObject.selectedCustomerID}
                  overrides={{
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
                  }}
                />
              )}
              {ComponentStateObject.showUpdateEmployeePage && (
                <EmployeeUpdateForm
                  onCancel={() => {
                    EmployeeObject.deleteSelectedEmployee();
                    handleSuccess("Employee deleted successfully!");
                    ComponentStateObject.setShowUpdateEmployeePage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Employee updated successfully!");
                    ComponentStateObject.setShowUpdateEmployeePage(false);
                  }}
                  id={EmployeeObject.selectedEmployeeID}
                  overrides={{
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
                  }}
                />
              )}

              {ComponentStateObject.showUpdatePositionPage && (
                <PositionUpdateForm
                  onCancel={() => {
                    deleteSelectedPosition();
                    handleSuccess("Position deleted successfully!");
                    ComponentStateObject.setShowUpdatePositionPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Position updated successfully!");
                    ComponentStateObject.setShowUpdatePositionPage(false);
                  }}
                  id={selectedPositionID}
                  overrides={{
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
                  }}
                />
              )}
              {ComponentStateObject.showUpdateMallPage && (
                <MallUpdateForm
                  onCancel={() => {
                    deleteSelectedMall();
                    handleSuccess("Mall deleted successfully!");
                    ComponentStateObject.setShowUpdateMallPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Mall updated successfully!");
                    ComponentStateObject.setShowUpdateMallPage(false);
                  }}
                  id={selectedMallID}
                  overrides={{
                    items: {
                      options: Object.values(mallIDNames),
                      onChange: (event) => {
                        setSelectedMallID(
                          UtilsObject.dictFindKeyByValue(
                            mallIDNames,
                            event.target.value
                          )
                        );
                      },
                    },
                  }}
                />
              )}
              {ComponentStateObject.showUpdateSalesPage && (
                <SalesUpdateForm
                  onCancel={() => {
                    SalesObject.deleteSelectedSales();
                    handleSuccess("Sales deleted successfully!");
                    ComponentStateObject.setShowUpdateSalesPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Sales updated successfully!");
                    ComponentStateObject.setShowUpdateSalesPage(false);
                  }}
                  id={SalesObject.selectedSalesID}
                  overrides={{
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
                  }}
                />
              )}

              {ComponentStateObject.showUpdateCompanyPage && (
                <CompanyUpdateForm
                  onCancel={() => {
                    deleteSelectedCompany();
                    handleSuccess("Company deleted successfully!");
                    ComponentStateObject.setShowUpdateCompanyPage(false);
                  }}
                  onSuccess={() => {
                    handleSuccess("Company updated successfully!");
                    ComponentStateObject.setShowUpdateCompanyPage(false);
                  }}
                  id={selectedCompanyID}
                  overrides={{
                    items: {
                      options: Object.values(companyIDNames),
                      onChange: (event) => {
                        setSelectedCompanyID(
                          UtilsObject.dictFindKeyByValue(
                            companyIDNames,
                            event.target.value
                          )
                        );
                      },
                    },
                  }}
                />
              )}
            </View>
          </View>
        )
      }
    </Flex>
  );
}
