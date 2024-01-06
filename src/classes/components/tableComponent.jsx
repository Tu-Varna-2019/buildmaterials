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

export function TableRowComponent({ headers, columnData }) {
  let id = 0;
  let idBody = 0;
  return (
    <>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={id++} as="th">
              {header}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {columnData.map((iterator) => (
          <TableRow key={idBody++}>
            {iterator.map((subIterator) => (
              <TableCell key={id++}>{subIterator}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </>
  );
}
// Prop validation
TableRowComponent.propTypes = {
  columnData: PropTypes.node.isRequired,
  headers: PropTypes.node.isRequired,
};
