/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMaterialType = /* GraphQL */ `
  mutation CreateMaterialType(
    $input: CreateMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    createMaterialType(input: $input, condition: $condition) {
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
export const updateMaterialType = /* GraphQL */ `
  mutation UpdateMaterialType(
    $input: UpdateMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    updateMaterialType(input: $input, condition: $condition) {
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
export const deleteMaterialType = /* GraphQL */ `
  mutation DeleteMaterialType(
    $input: DeleteMaterialTypeInput!
    $condition: ModelMaterialTypeConditionInput
  ) {
    deleteMaterialType(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createMall = /* GraphQL */ `
  mutation CreateMall(
    $input: CreateMallInput!
    $condition: ModelMallConditionInput
  ) {
    createMall(input: $input, condition: $condition) {
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
export const updateMall = /* GraphQL */ `
  mutation UpdateMall(
    $input: UpdateMallInput!
    $condition: ModelMallConditionInput
  ) {
    updateMall(input: $input, condition: $condition) {
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
export const deleteMall = /* GraphQL */ `
  mutation DeleteMall(
    $input: DeleteMallInput!
    $condition: ModelMallConditionInput
  ) {
    deleteMall(input: $input, condition: $condition) {
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
export const createPosition = /* GraphQL */ `
  mutation CreatePosition(
    $input: CreatePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    createPosition(input: $input, condition: $condition) {
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
export const updatePosition = /* GraphQL */ `
  mutation UpdatePosition(
    $input: UpdatePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    updatePosition(input: $input, condition: $condition) {
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
export const deletePosition = /* GraphQL */ `
  mutation DeletePosition(
    $input: DeletePositionInput!
    $condition: ModelPositionConditionInput
  ) {
    deletePosition(input: $input, condition: $condition) {
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
      employeeID
      customerID
      materialID
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
      employeeID
      customerID
      materialID
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
      employeeID
      customerID
      materialID
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
