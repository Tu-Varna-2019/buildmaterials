import React from "react";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../../contexts/data_models/context";
import {
  getCompany,
  getCustomer,
  getEmployee,
  getMaterial,
  getMaterialType,
  getPosition,
  listMaterials,
  listSales,
} from "../../../graphql/queries";
import { TableRowComponent } from "../tableComponent";

export function TableState() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { client, tableDataState, setTableDataState } = UtilsObject;

  const getAllSales = async () => {
    const responseSales = await client.graphql({
      query: listSales,
    });
    return responseSales.data.listSales.items;
  };

  const getMaterialTypeByID = async (materialTypeID) => {
    const responseMaterialTypes = await client.graphql({
      query: getMaterialType,
      variables: { id: materialTypeID },
    });

    return responseMaterialTypes.data.getMaterialType;
  };
  const getCompanyCustomerMaterial = async (customerID, materialID) => {
    const responseCustomer = await client.graphql({
      query: getCustomer,
      variables: { id: customerID },
    });
    const customer = responseCustomer.data.getCustomer;

    const responseCompany = await client.graphql({
      query: getCompany,
      variables: { id: customer.companyID },
    });

    const responseMaterial = await client.graphql({
      query: getMaterial,
      variables: { id: materialID },
    });

    const company = responseCompany.data.getCompany;
    const material = responseMaterial.data.getMaterial;

    return { company, customer, material };
  };

  const getEmployeeAndPosition = async (employeeID) => {
    const responseEmployee = await client.graphql({
      query: getEmployee,
      variables: { id: employeeID },
    });

    const employee = responseEmployee.data.getEmployee;

    const responsePosition = await client.graphql({
      query: getPosition,
      variables: { id: employee.positionID },
    });

    const position = responsePosition.data.getPosition;

    return { employee, position };
  };

  const getSalesByEmployee = async () => {
    let result = [];

    const salesItems = await getAllSales();

    for (const saleIndex in salesItems) {
      const sale = salesItems[saleIndex];

      const { employee, position } = await getEmployeeAndPosition(
        sale.employeeID
      );

      result.push([
        employee.name,
        position.name,
        sale.quantitySold,
        sale.salesDate,
        sale.totalPrice,
      ]);
    }

    return result;
  };

  const getColumnCustomerPurchase = async () => {
    /*
    Get:
    ========================
    - customer name
    - customer phone
    - customer invoice status
    - customer bulstat
    - company name
    - sale date
    - sale quantity
    - material name
    ------------------------
    Sort by customer name
    */
    let result = [];

    const salesItems = await getAllSales();

    for (const saleIndex in salesItems) {
      const sale = salesItems[saleIndex];

      const { company, customer, material } = await getCompanyCustomerMaterial(
        sale.customerID,
        sale.materialID
      );

      result.push([
        customer.name,
        customer.phone,
        customer.invoiceStatus,
        customer.bulstat,
        company.name,
        sale.salesDate,
        sale.quantitySold,
        material.name,
      ]);
    }

    result.sort((a, b) => (a.customerName > b.customerName ? 1 : -1));
    return result;
  };

  const getColumnFinancialSum = async () => {
    /*
    Get total sales
    Get number of transactions
    Get average sales value
    ------------------------
    */
    let result = [];

    let totalSales = 0;
    const salesItems = await getAllSales();
    const numberOfTransactions = salesItems.length;

    salesItems.forEach((sale) => {
      totalSales += sale.totalPrice;
    });

    const averageSalesValue = totalSales / numberOfTransactions;

    result.push([totalSales, numberOfTransactions, averageSalesValue]);

    return result;
  };

  const getAvailableMaterials = async () => {
    /*
    Get material type
    Get material name
    Get material quantity
    Get material price
    ------------------------
    Sort by material type
    */
    let result = [];

    const responseMaterial = await client.graphql({
      query: listMaterials,
    });

    const materialItems = responseMaterial.data.listMaterials.items;

    for (const materialIndex in materialItems) {
      const material = materialItems[materialIndex];

      const materialType = await getMaterialTypeByID(material.materialtypeID);

      result.push([
        materialType.name,
        material.name,
        material.quantityAvailable,
        material.price,
      ]);
    }

    // Sort by material type
    result.sort((a, b) => (a.materialType > b.materialType ? 1 : -1));

    return result;
  };

  const getPopularSoldMaterials = async () => {
    let materialSalesData = {};
    let result = [];

    const salesItems = await getAllSales();

    // Aggregate sales data
    salesItems.forEach((sale) => {
      if (!materialSalesData[sale.materialID]) {
        materialSalesData[sale.materialID] = {
          totalQuantitySold: 0,
          totalSalesValue: 0,
        };
      }
      materialSalesData[sale.materialID].totalQuantitySold += sale.quantitySold;
      materialSalesData[sale.materialID].totalSalesValue += sale.totalPrice;
    });

    // Fetch material details and format the result
    for (const materialID in materialSalesData) {
      const responseMaterial = await client.graphql({
        query: getMaterial,
        variables: { id: materialID },
      });
      const material = responseMaterial.data.getMaterial;
      const materialType = await getMaterialTypeByID(material.materialtypeID);

      result.push([
        materialType.name,
        material.name,
        materialSalesData[materialID].totalQuantitySold,
        materialSalesData[materialID].totalSalesValue,
      ]);
    }

    // Sort by totalQuantitySold
    result.sort((a, b) => b.totalQuantitySold - a.totalQuantitySold);

    return result;
  };

  const exportTableToCSVBlob = () => {
    const filename = "export.csv";
    const csv = [];

    const headers = tableDataState[0];
    const rows = tableDataState[1];

    if (rows.length === 0) {
      console.warn("No data available for export");
      return;
    }

    // Add the CSV header row
    const headerRow = headers;
    csv.push(headerRow.join(","));

    for (const row of rows) {
      const rowData = row.map((cellValue) => `"${cellValue}"`);
      csv.push(rowData.join(","));
    }

    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getTableResult = async () => {
    let tableHeader = [];
    let result = [];

    if (ComponentStateObject.reportSalesByEmployee) {
      result = await getSalesByEmployee();
      tableHeader.push(
        "Employee Name",
        "Position",
        "Quantity Sold",
        "Sale Date",
        "Total Price"
      );
    } else if (ComponentStateObject.reportCustomerPurchaseOptions) {
      result = await getColumnCustomerPurchase();
      tableHeader.push(
        "Customer Name",
        "Customer Phone",
        "Customer Invoice Status",
        "Customer Bulstat",
        "Company Name",
        "Sale Date",
        "Sale Quantity",
        "Material Name"
      );
    } else if (ComponentStateObject.reportFinancialSumReport) {
      result = await getColumnFinancialSum();
      tableHeader.push(
        "Total Sales",
        "Number of Transactions",
        "Average Sales Value"
      );
    } else if (ComponentStateObject.reportAvailableMaterials) {
      result = await getAvailableMaterials();
      tableHeader.push(
        "Material Type",
        "Material Name",
        "Material Quantity",
        "Material Price"
      );
    } else if (ComponentStateObject.reportPopularSoldMaterials) {
      result = await getPopularSoldMaterials();
      tableHeader.push(
        "Material Type",
        "Material Name",
        "Total Quantity Sold",
        "Total Sales Value"
      );
    }

    setTableDataState([tableHeader, result]);
    return <TableRowComponent headers={tableHeader} columnData={result} />;
  };

  return { getTableResult, exportTableToCSVBlob };
}
