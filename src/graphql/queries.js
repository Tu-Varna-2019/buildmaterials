/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSales = /* GraphQL */ `
  query GetSales($id: ID!) {
    getSales(id: $id) {
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
export const listSales = /* GraphQL */ `
  query ListSales(
    $filter: ModelSalesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSales(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        quantitySold
        salesDate
        totalPrice
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMaterial = /* GraphQL */ `
  query GetMaterial($id: ID!) {
    getMaterial(id: $id) {
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
export const listMaterials = /* GraphQL */ `
  query ListMaterials(
    $filter: ModelMaterialFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        quantityAvailable
        price
        type
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
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
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
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
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        phone
        molAssigned
        position
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
