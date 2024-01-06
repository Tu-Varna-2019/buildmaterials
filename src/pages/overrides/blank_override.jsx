import { Button } from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { BlankComponent } from "../../classes/components/blankComponent";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import { TableState } from "../../classes/components/states/tableState";

export function BlankOverride() {
  const { handleExitClick } = BlankComponent();
  const { UtilsObject } = React.useContext(HelpersContext);
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { exportTableToCSVBlob } = TableState();

  useEffect(() => {
    const pageMapping = {
      showCreateMaterialPage: "Create Material",
      showCreateMaterialTypePage: "Create Material Type",
      showCreateCustomerPage: "Create Customer",
      showCreateEmployeePage: "Create Employee",
      showCreatePositionPage: "Create Position",
      showCreateMallPage: "Create Mall",
      showCreateSalesPage: "Create Sales",
      showCreateCompanyPage: "Create Company",
      showUpdateMaterialPage: "Update Material",
      showUpdateMaterialTypePage: "Update Material Type",
      showUpdateCustomerPage: "Update Customer",
      showUpdateEmployeePage: "Update Employee",
      showUpdatePositionPage: "Update Position",
      showUpdateMallPage: "Update Mall",
      showUpdateSalesPage: "Update Sales",
      showUpdateCompanyPage: "Update Company",
      reportSalesByEmployee:
        "Show items sold by a given employee for a given period sorted by type of item",
      reportCustomerPurchaseOptions:
        " Purchase history of individual customers",
      reportFinancialSumReport: "Financial sum report for all sales",
      reportAvailableMaterials: "Available materials",
      reportPopularSoldMaterials: "Popular sold materials",
    };

    const pageKeys = Object.keys(pageMapping);
    for (const key of pageKeys) {
      if (ComponentStateObject[key]) {
        UtilsObject.setHomeText(pageMapping[key]);
        break;
      }
    }
  }, [ComponentStateObject, UtilsObject]);

  const blankOverride = {
    button_exit: {
      onClick: (event) => handleExitClick(event),
    },
  };

  const ButtonExportTableCSV = () => {
    return (
      <Button
        variation="primary"
        colorTheme="info"
        loadingText=""
        onClick={() => exportTableToCSVBlob()}
        isDisabled={UtilsObject.tableDataState.length === 0}
      >
        Export table to CSV 📄
      </Button>
    );
  };

  return { blankOverride, ButtonExportTableCSV };
}
