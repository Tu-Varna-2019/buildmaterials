import { Customer } from "../../classes/data_models/customer";
import { Employee } from "../../classes/data_models/employee";
import { Material } from "../../classes/data_models/material";
import { Sales } from "../../classes/data_models/sales";

import { DataModelContext } from "../../contexts/data_models/context";

export function DataModelProvider({ children }) {
  const CustomerObject = Customer();
  const EmployeeObject = Employee();
  const MaterialObject = Material();
  const SalesObject = Sales();

  return (
    <DataModelContext.Provider
      value={{ CustomerObject, EmployeeObject, MaterialObject, SalesObject }}
    >
      {children}
    </DataModelContext.Provider>
  );
}
