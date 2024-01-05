import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@aws-amplify/ui-react";
import React, { useEffect } from "react";
import { TableState } from "./states/tableState";
import PropTypes from "prop-types";

export function TableComponent() {
  const { getTableResult } = TableState();

  const [tableResult, setTableResult] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const outputData = await getTableResult();
      setTableResult(outputData);
    };

    fetchData().catch(console.error);
  }, [getTableResult]);

  return (
    <ThemeProvider>
      <Table highlightOnHover variation="striped">
        {tableResult}
      </Table>
    </ThemeProvider>
  );
}

export function RowSalesByEmployee({ outputColumns }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell as="th">Employee Name</TableCell>
          <TableCell as="th">Position</TableCell>
          <TableCell as="th">Quantity Sold</TableCell>
          <TableCell as="th">Total Price</TableCell>
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
  );
}

// Prop validation
RowSalesByEmployee.propTypes = {
  outputColumns: PropTypes.node.isRequired,
};

export function RowCustomerPurchase({ outputColumns }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell as="th">Customer Name</TableCell>
          <TableCell as="th">Phone</TableCell>
          <TableCell as="th">Invoice status</TableCell>
          <TableCell as="th">Bulstat</TableCell>
          <TableCell as="th">Company</TableCell>
          <TableCell as="th">Sales date</TableCell>
          <TableCell as="th">Quantity Sold</TableCell>
          <TableCell as="th">Material name</TableCell>
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
  );
}
// Prop validation
RowCustomerPurchase.propTypes = {
  outputColumns: PropTypes.node.isRequired,
};

export function RowFinancialSum({ outputColumns }) {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell as="th">Total Sales</TableCell>
          <TableCell as="th">Number of transactions</TableCell>
          <TableCell as="th">Average Sales</TableCell>
        </TableRow>
      </TableHead>
      {outputColumns}
    </>
  );
}
// Prop validation
RowFinancialSum.propTypes = {
  outputColumns: PropTypes.node.isRequired,
};
export function ColumnSalesByEmployee({ result }) {
  let id = 0;
  return (
    <TableBody>
      {result.map((iterator) => (
        <TableRow key={id++}>
          <TableCell>{iterator.employeeName}</TableCell>
          <TableCell>{iterator.employeePosition}</TableCell>
          <TableCell>{iterator.salesQuantity}</TableCell>
          <TableCell>{iterator.saleDate}</TableCell>
          <TableCell>{iterator.salesTotalPrice}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

ColumnSalesByEmployee.propTypes = {
  result: PropTypes.array.isRequired,
};

export function ColumnCustomerPurchase({ result }) {
  let id = 0;
  return (
    <TableBody>
      {result.map((iterator) => (
        <TableRow key={id++}>
          <TableCell>{iterator.customerName}</TableCell>
          <TableCell>{iterator.customerPhone}</TableCell>
          <TableCell>{iterator.customerInvoiceStatus}</TableCell>
          <TableCell>{iterator.customerBulstat}</TableCell>
          <TableCell>{iterator.companyName}</TableCell>
          <TableCell>{iterator.saleDate}</TableCell>
          <TableCell>{iterator.saleQuantity}</TableCell>
          <TableCell>{iterator.materialName}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

ColumnCustomerPurchase.propTypes = {
  result: PropTypes.array.isRequired,
};

export function ColumnFinancialSum({ result }) {
  let id = 0;
  return (
    <TableBody>
      {result.map((iterator) => (
        <TableRow key={id++}>
          <TableCell>{iterator.totalSales}</TableCell>
          <TableCell>{iterator.numberOfTransactions}</TableCell>
          <TableCell>{iterator.averageSalesValue}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

ColumnFinancialSum.propTypes = {
  result: PropTypes.array.isRequired,
};
