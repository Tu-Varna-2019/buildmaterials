/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMaterialType = /* GraphQL */ `
  subscription OnCreateMaterialType(
    $filter: ModelSubscriptionMaterialTypeFilterInput
  ) {
    onCreateMaterialType(filter: $filter) {
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
export const onUpdateMaterialType = /* GraphQL */ `
  subscription OnUpdateMaterialType(
    $filter: ModelSubscriptionMaterialTypeFilterInput
  ) {
    onUpdateMaterialType(filter: $filter) {
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
export const onDeleteMaterialType = /* GraphQL */ `
  subscription OnDeleteMaterialType(
    $filter: ModelSubscriptionMaterialTypeFilterInput
  ) {
    onDeleteMaterialType(filter: $filter) {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onCreateCompany(filter: $filter) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onUpdateCompany(filter: $filter) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($filter: ModelSubscriptionCompanyFilterInput) {
    onDeleteCompany(filter: $filter) {
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
export const onCreateMall = /* GraphQL */ `
  subscription OnCreateMall($filter: ModelSubscriptionMallFilterInput) {
    onCreateMall(filter: $filter) {
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
export const onUpdateMall = /* GraphQL */ `
  subscription OnUpdateMall($filter: ModelSubscriptionMallFilterInput) {
    onUpdateMall(filter: $filter) {
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
export const onDeleteMall = /* GraphQL */ `
  subscription OnDeleteMall($filter: ModelSubscriptionMallFilterInput) {
    onDeleteMall(filter: $filter) {
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
export const onCreatePosition = /* GraphQL */ `
  subscription OnCreatePosition($filter: ModelSubscriptionPositionFilterInput) {
    onCreatePosition(filter: $filter) {
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
export const onUpdatePosition = /* GraphQL */ `
  subscription OnUpdatePosition($filter: ModelSubscriptionPositionFilterInput) {
    onUpdatePosition(filter: $filter) {
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
export const onDeletePosition = /* GraphQL */ `
  subscription OnDeletePosition($filter: ModelSubscriptionPositionFilterInput) {
    onDeletePosition(filter: $filter) {
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
export const onCreateSales = /* GraphQL */ `
  subscription OnCreateSales($filter: ModelSubscriptionSalesFilterInput) {
    onCreateSales(filter: $filter) {
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
export const onUpdateSales = /* GraphQL */ `
  subscription OnUpdateSales($filter: ModelSubscriptionSalesFilterInput) {
    onUpdateSales(filter: $filter) {
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
export const onDeleteSales = /* GraphQL */ `
  subscription OnDeleteSales($filter: ModelSubscriptionSalesFilterInput) {
    onDeleteSales(filter: $filter) {
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
export const onCreateMaterial = /* GraphQL */ `
  subscription OnCreateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onCreateMaterial(filter: $filter) {
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
export const onUpdateMaterial = /* GraphQL */ `
  subscription OnUpdateMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onUpdateMaterial(filter: $filter) {
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
export const onDeleteMaterial = /* GraphQL */ `
  subscription OnDeleteMaterial($filter: ModelSubscriptionMaterialFilterInput) {
    onDeleteMaterial(filter: $filter) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onCreateCustomer(filter: $filter) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onUpdateCustomer(filter: $filter) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($filter: ModelSubscriptionCustomerFilterInput) {
    onDeleteCustomer(filter: $filter) {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onCreateEmployee(filter: $filter) {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onUpdateEmployee(filter: $filter) {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
    onDeleteEmployee(filter: $filter) {
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
