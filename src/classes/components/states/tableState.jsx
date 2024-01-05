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
  getPosition,
  listSales,
} from "../../../graphql/queries";
import {
  ColumnCustomerPurchase,
  ColumnFinancialSum,
  ColumnSalesByEmployee,
  RowCustomerPurchase,
  RowFinancialSum,
  RowSalesByEmployee,
} from "../tableComponent";

export function TableState() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);
  const { UtilsObject } = React.useContext(HelpersContext);
  const { client } = UtilsObject;

  const getSalesByEmployee = async () => {
    let result = [];

    try {
      const responseSales = await client.graphql({
        query: listSales,
      });

      const salesItems = responseSales.data.listSales.items;

      for (const saleIndex in salesItems) {
        const sale = salesItems[saleIndex];

        const responseEmployee = await client.graphql({
          query: getEmployee,
          variables: { id: sale.employeeID },
        });

        const employee = responseEmployee.data.getEmployee;

        if (employee != null) {
          const responsePosition = await client.graphql({
            query: getPosition,
            variables: { id: employee.positionID },
          });

          result.push({
            employeeName: employee.name,
            employeePosition: responsePosition.data.getPosition.name,
            salesQuantity: sale.quantitySold,
            saleDate: sale.salesDate,
            salesTotalPrice: sale.totalPrice,
          });
        } else console.error("Employee not found for sale: ", sale);
      }
    } catch (error) {
      console.error("Error: ", error);
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

    try {
      const responseSales = await client.graphql({
        query: listSales,
      });

      const salesItems = responseSales.data.listSales.items;

      for (const saleIndex in salesItems) {
        const sale = salesItems[saleIndex];

        const responseCustomer = await client.graphql({
          query: getCustomer,
          variables: { id: sale.customerID },
        });

        const responseMaterial = await client.graphql({
          query: getMaterial,
          variables: { id: sale.materialID },
        });

        const customer = responseCustomer.data.getCustomer;
        const material = responseMaterial.data.getMaterial;

        const responseCompany = await client.graphql({
          query: getCompany,
          variables: { id: customer.companyID },
        });

        const company = responseCompany.data.getCompany;

        result.push({
          customerName: customer.name,
          customerPhone: customer.phone,
          customerInvoiceStatus: customer.invoiceStatus,
          customerBulstat: customer.bulstat,
          companyName: company.name,
          saleDate: sale.salesDate,
          saleQuantity: sale.quantitySold,
          materialName: material.name,
        });
      }
    } catch (error) {
      console.error("Error: ", error);
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

    try {
      const responseSales = await client.graphql({
        query: listSales,
      });
      let totalSales = 0;
      const salesItems = responseSales.data.listSales.items;
      const numberOfTransactions = salesItems.length;

      salesItems.forEach((sale) => {
        totalSales += sale.totalPrice;
      });

      const averageSalesValue = totalSales / numberOfTransactions;

      result.push({
        totalSales,
        numberOfTransactions,
        averageSalesValue,
      });
    } catch (error) {
      console.error("Error: ", error);
    }

    return result;
  };

  const getTableResult = async () => {
    if (ComponentStateObject.reportSalesByEmployee) {
      const result = await getSalesByEmployee();

      const resultColumns = <ColumnSalesByEmployee result={result} />;

      return <RowSalesByEmployee outputColumns={resultColumns} />;
    } else if (ComponentStateObject.reportCustomerPurchaseOptions) {
      const result = await getColumnCustomerPurchase();

      const resultColumns = <ColumnCustomerPurchase result={result} />;

      return <RowCustomerPurchase outputColumns={resultColumns} />;
    } else if (ComponentStateObject.reportFinancialSumReport) {
      const result = await getColumnFinancialSum();

      const resultColumns = <ColumnFinancialSum result={result} />;

      return <RowFinancialSum outputColumns={resultColumns} />;
    }
  };
  return { getTableResult };
}
