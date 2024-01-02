/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMaterialType = /* GraphQL */ `
  query GetMaterialType($id: ID!) {
    getMaterialType(id: $id) {
      id
      name
      Materials {
        items {
          id
          name
          quantityAvailable
          price
          materialtypeID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMaterialTypes = /* GraphQL */ `
  query ListMaterialTypes(
    $filter: ModelMaterialTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMaterialTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Materials {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      Customers {
        items {
          id
          name
          phone
          invoiceStatus
          bulstat
          companyID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Customers {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMall = /* GraphQL */ `
  query GetMall($id: ID!) {
    getMall(id: $id) {
      id
      name
      Employees {
        items {
          id
          name
          phone
          positionID
          mallID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMalls = /* GraphQL */ `
  query ListMalls(
    $filter: ModelMallFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMalls(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Employees {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPosition = /* GraphQL */ `
  query GetPosition($id: ID!) {
    getPosition(id: $id) {
      id
      name
      Employees {
        items {
          id
          name
          phone
          positionID
          mallID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listPositions = /* GraphQL */ `
  query ListPositions(
    $filter: ModelPositionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPositions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Employees {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSales = /* GraphQL */ `
  query GetSales($id: ID!) {
    getSales(id: $id) {
      id
      quantitySold
      salesDate
      totalPrice
      employeeID
      customerID
      materialID
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
        employeeID
        customerID
        materialID
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
      Sales {
        items {
          id
          quantitySold
          salesDate
          totalPrice
          employeeID
          customerID
          materialID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      materialtypeID
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
        Sales {
          nextToken
          __typename
        }
        materialtypeID
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
      Sales {
        items {
          id
          quantitySold
          salesDate
          totalPrice
          employeeID
          customerID
          materialID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      companyID
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
        Sales {
          nextToken
          __typename
        }
        companyID
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
      Sales {
        items {
          id
          quantitySold
          salesDate
          totalPrice
          employeeID
          customerID
          materialID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      positionID
      mallID
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
        Sales {
          nextToken
          __typename
        }
        positionID
        mallID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
