/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSales = /* GraphQL */ `
  subscription OnCreateSales($filter: ModelSubscriptionSalesFilterInput) {
    onCreateSales(filter: $filter) {
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
export const onUpdateSales = /* GraphQL */ `
  subscription OnUpdateSales($filter: ModelSubscriptionSalesFilterInput) {
    onUpdateSales(filter: $filter) {
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
export const onDeleteSales = /* GraphQL */ `
  subscription OnDeleteSales($filter: ModelSubscriptionSalesFilterInput) {
    onDeleteSales(filter: $filter) {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onCreateMaterial(filter: $filter) {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onUpdateMaterial(filter: $filter) {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onDeleteMaterial(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
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
