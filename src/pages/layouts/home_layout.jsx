import { Flex, View } from "@aws-amplify/ui-react";
import React from "react";
import { AlertBoxHome } from "../../classes/components/alertBoxHome";
import { CreateFormComponent } from "../../classes/components/createFormComponent";
import { UpdateFormComponent } from "../../classes/components/updateFormComponent";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import FigBlank from "../../ui-components/FigBlank";
import FigHome from "../../ui-components/FigHome";
import { BlankOverride } from "../overrides/blank_override";
import { FuncHomeOverride } from "../overrides/home_override";
import { TableComponent } from "../../classes/components/tableComponent";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { createForm } = CreateFormComponent();
  const { updateForm } = UpdateFormComponent();

  const { homeOverride } = FuncHomeOverride();
  const { blankOverride } = BlankOverride();

  const { UtilsObject } = React.useContext(HelpersContext);

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
          ComponentStateObject.showUpdateSalesPage ||
          /*Report */
          ComponentStateObject.reportSalesByEmployee ||
          ComponentStateObject.reportCustomerPurchaseOptions ||
          ComponentStateObject.reportFinancialSumReport) && (
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

              {createForm.map(
                ({ showPage, FormComponent, successMessage, setShowPage }) =>
                  showPage && (
                    <FormComponent
                      key={showPage}
                      onSuccess={() => {
                        handleSuccess(successMessage);
                        setShowPage(false);
                      }}
                    />
                  )
              )}

              {/*Update form */}

              {updateForm.map(
                ({
                  key,
                  showPage,
                  FormComponent,
                  onCancel,
                  onSuccess,
                  id,
                  overrides,
                }) =>
                  showPage && (
                    <FormComponent
                      key={key}
                      onCancel={onCancel}
                      onSuccess={onSuccess}
                      id={id}
                      overrides={overrides}
                    />
                  )
              )}

              {/*Report form */}
              <TableComponent />
            </View>
          </View>
        )
      }
    </Flex>
  );
}
