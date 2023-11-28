/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSales = /* GraphQL */ `
  mutation CreateSales(
    $input: CreateSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    createSales(input: $input, condition: $condition) {
      id
      quantitySold
      salesDate
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateSales = /* GraphQL */ `
  mutation UpdateSales(
    $input: UpdateSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    updateSales(input: $input, condition: $condition) {
      id
      quantitySold
      salesDate
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteSales = /* GraphQL */ `
  mutation DeleteSales(
    $input: DeleteSalesInput!
    $condition: ModelSalesConditionInput
  ) {
    deleteSales(input: $input, condition: $condition) {
      id
      quantitySold
      salesDate
      totalPrice
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMaterial = /* GraphQL */ `
  mutation CreateMaterial(
    $input: CreateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    createMaterial(input: $input, condition: $condition) {
      id
      name
      quantityAvailable
      price
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMaterial = /* GraphQL */ `
  mutation UpdateMaterial(
    $input: UpdateMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    updateMaterial(input: $input, condition: $condition) {
      id
      name
      quantityAvailable
      price
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMaterial = /* GraphQL */ `
  mutation DeleteMaterial(
    $input: DeleteMaterialInput!
    $condition: ModelMaterialConditionInput
  ) {
    deleteMaterial(input: $input, condition: $condition) {
      id
      name
      quantityAvailable
      price
      type
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
      id
      name
      phone
      invoiceStatus
      bulstat
      companyName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
      id
      name
      phone
      invoiceStatus
      bulstat
      companyName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
      id
      name
      phone
      invoiceStatus
      bulstat
      companyName
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      name
      phone
      molAssigned
      position
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      name
      phone
      molAssigned
      position
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      name
      phone
      molAssigned
      position
      createdAt
      updatedAt
      __typename
    }
  }
`;
