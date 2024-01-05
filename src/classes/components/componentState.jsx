import { useState } from "react";

export function ComponentState() {
  // Create
  const [showCreateMaterialPage, setShowCreateMaterialPage] = useState(false);
  const [showCreateCustomerPage, setShowCreateCustomerPage] = useState(false);
  const [showCreateEmployeePage, setShowCreateEmployeePage] = useState(false);
  const [showCreatePositionPage, setShowCreatePositionPage] = useState(false);
  const [showCreateMallPage, setShowCreateMallPage] = useState(false);
  const [showCreateMaterialTypePage, setShowCreateMaterialTypePage] =
    useState(false);
  const [showCreateSalesPage, setShowCreateSalesPage] = useState(false);
  const [showCreateCompanyPage, setShowCreateCompanyPage] = useState(false);

  // Update
  const [showUpdateMaterialPage, setShowUpdateMaterialPage] = useState(false);
  const [showUpdateCustomerPage, setShowUpdateCustomerPage] = useState(false);
  const [showUpdateEmployeePage, setShowUpdateEmployeePage] = useState(false);
  const [showUpdatePositionPage, setShowUpdatePositionPage] = useState(false);
  const [showUpdateMallPage, setShowUpdateMallPage] = useState(false);
  const [showUpdateMaterialTypePage, setShowUpdateMaterialTypePage] =
    useState(false);
  const [showUpdateSalesPage, setShowUpdateSalesPage] = useState(false);
  const [showUpdateCompanyPage, setShowUpdateCompanyPage] = useState(false);

  // Output Table
  const [reportSalesByEmployee, setReportSalesByEmployee] = useState(false);
  const [reportCustomerPurchaseOptions, setReportCustomerPurchaseOptions] =
    useState(false);
  const [reportFinancialSumReport, setReportFinancialSumReport] =
    useState(false);

  return {
    reportFinancialSumReport,
    setReportFinancialSumReport,
    reportCustomerPurchaseOptions,
    setReportCustomerPurchaseOptions,
    reportSalesByEmployee,
    setReportSalesByEmployee,
    showCreateMaterialPage,
    setShowCreateMaterialPage,
    showCreateMaterialTypePage,
    setShowCreateMaterialTypePage,
    showUpdateMaterialPage,
    setShowUpdateMaterialPage,
    showUpdateMaterialTypePage,
    setShowUpdateMaterialTypePage,
    showCreateCustomerPage,
    setShowCreateCustomerPage,
    showCreateEmployeePage,
    setShowCreateEmployeePage,
    showCreatePositionPage,
    setShowCreatePositionPage,
    showCreateMallPage,
    setShowCreateMallPage,
    showCreateSalesPage,
    setShowCreateSalesPage,
    showCreateCompanyPage,
    setShowCreateCompanyPage,
    showUpdateCompanyPage,
    setShowUpdateCompanyPage,
    showUpdateCustomerPage,
    setShowUpdateCustomerPage,
    showUpdateEmployeePage,
    setShowUpdateEmployeePage,
    showUpdatePositionPage,
    setShowUpdatePositionPage,
    showUpdateMallPage,
    setShowUpdateMallPage,
    showUpdateSalesPage,
    setShowUpdateSalesPage,
  };
}
