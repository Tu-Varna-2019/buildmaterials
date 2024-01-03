/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  listCustomers,
  listEmployees,
  listMaterials,
} from "../graphql/queries";
import { createSales } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function SalesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    quantitySold: "",
    salesDate: "",
    totalPrice: "",
    employeeID: undefined,
    customerID: undefined,
    materialID: undefined,
  };
  const [quantitySold, setQuantitySold] = React.useState(
    initialValues.quantitySold
  );
  const [salesDate, setSalesDate] = React.useState(initialValues.salesDate);
  const [totalPrice, setTotalPrice] = React.useState(initialValues.totalPrice);
  const [employeeID, setEmployeeID] = React.useState(initialValues.employeeID);
  const [employeeIDLoading, setEmployeeIDLoading] = React.useState(false);
  const [employeeIDRecords, setEmployeeIDRecords] = React.useState([]);
  const [selectedEmployeeIDRecords, setSelectedEmployeeIDRecords] =
    React.useState([]);
  const [customerID, setCustomerID] = React.useState(initialValues.customerID);
  const [customerIDLoading, setCustomerIDLoading] = React.useState(false);
  const [customerIDRecords, setCustomerIDRecords] = React.useState([]);
  const [selectedCustomerIDRecords, setSelectedCustomerIDRecords] =
    React.useState([]);
  const [materialID, setMaterialID] = React.useState(initialValues.materialID);
  const [materialIDLoading, setMaterialIDLoading] = React.useState(false);
  const [materialIDRecords, setMaterialIDRecords] = React.useState([]);
  const [selectedMaterialIDRecords, setSelectedMaterialIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setQuantitySold(initialValues.quantitySold);
    setSalesDate(initialValues.salesDate);
    setTotalPrice(initialValues.totalPrice);
    setEmployeeID(initialValues.employeeID);
    setCurrentEmployeeIDValue(undefined);
    setCurrentEmployeeIDDisplayValue("");
    setCustomerID(initialValues.customerID);
    setCurrentCustomerIDValue(undefined);
    setCurrentCustomerIDDisplayValue("");
    setMaterialID(initialValues.materialID);
    setCurrentMaterialIDValue(undefined);
    setCurrentMaterialIDDisplayValue("");
    setErrors({});
  };
  const [currentEmployeeIDDisplayValue, setCurrentEmployeeIDDisplayValue] =
    React.useState("");
  const [currentEmployeeIDValue, setCurrentEmployeeIDValue] =
    React.useState(undefined);
  const employeeIDRef = React.createRef();
  const [currentCustomerIDDisplayValue, setCurrentCustomerIDDisplayValue] =
    React.useState("");
  const [currentCustomerIDValue, setCurrentCustomerIDValue] =
    React.useState(undefined);
  const customerIDRef = React.createRef();
  const [currentMaterialIDDisplayValue, setCurrentMaterialIDDisplayValue] =
    React.useState("");
  const [currentMaterialIDValue, setCurrentMaterialIDValue] =
    React.useState(undefined);
  const materialIDRef = React.createRef();
  const getDisplayValue = {
    employeeID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    customerID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    materialID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    quantitySold: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [-1],
        validationMessage: "Quantity must be a positive number!",
      },
    ],
    salesDate: [{ type: "Required" }],
    totalPrice: [
      { type: "Required" },
      {
        type: "GreaterThanNum",
        numValues: [-1],
        validationMessage: "The value must be greater than -1",
      },
    ],
    employeeID: [{ type: "Required" }],
    customerID: [{ type: "Required" }],
    materialID: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const fetchEmployeeIDRecords = async (value) => {
    setEmployeeIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listEmployees.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listEmployees?.items;
      var loaded = result.filter((item) => employeeID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEmployeeIDRecords(newOptions.slice(0, autocompleteLength));
    setEmployeeIDLoading(false);
  };
  const fetchCustomerIDRecords = async (value) => {
    setCustomerIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCustomers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCustomers?.items;
      var loaded = result.filter((item) => customerID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCustomerIDRecords(newOptions.slice(0, autocompleteLength));
    setCustomerIDLoading(false);
  };
  const fetchMaterialIDRecords = async (value) => {
    setMaterialIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listMaterials.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMaterials?.items;
      var loaded = result.filter((item) => materialID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMaterialIDRecords(newOptions.slice(0, autocompleteLength));
    setMaterialIDLoading(false);
  };
  React.useEffect(() => {
    fetchEmployeeIDRecords("");
    fetchCustomerIDRecords("");
    fetchMaterialIDRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          quantitySold,
          salesDate,
          totalPrice,
          employeeID,
          customerID,
          materialID,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createSales.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "SalesCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Quantity sold</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantitySold}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              quantitySold: value,
              salesDate,
              totalPrice,
              employeeID,
              customerID,
              materialID,
            };
            const result = onChange(modelFields);
            value = result?.quantitySold ?? value;
          }
          if (errors.quantitySold?.hasError) {
            runValidationTasks("quantitySold", value);
          }
          setQuantitySold(value);
        }}
        onBlur={() => runValidationTasks("quantitySold", quantitySold)}
        errorMessage={errors.quantitySold?.errorMessage}
        hasError={errors.quantitySold?.hasError}
        {...getOverrideProps(overrides, "quantitySold")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Sales date</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={salesDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              quantitySold,
              salesDate: value,
              totalPrice,
              employeeID,
              customerID,
              materialID,
            };
            const result = onChange(modelFields);
            value = result?.salesDate ?? value;
          }
          if (errors.salesDate?.hasError) {
            runValidationTasks("salesDate", value);
          }
          setSalesDate(value);
        }}
        onBlur={() => runValidationTasks("salesDate", salesDate)}
        errorMessage={errors.salesDate?.errorMessage}
        hasError={errors.salesDate?.hasError}
        {...getOverrideProps(overrides, "salesDate")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Total price</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalPrice}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              quantitySold,
              salesDate,
              totalPrice: value,
              employeeID,
              customerID,
              materialID,
            };
            const result = onChange(modelFields);
            value = result?.totalPrice ?? value;
          }
          if (errors.totalPrice?.hasError) {
            runValidationTasks("totalPrice", value);
          }
          setTotalPrice(value);
        }}
        onBlur={() => runValidationTasks("totalPrice", totalPrice)}
        errorMessage={errors.totalPrice?.errorMessage}
        hasError={errors.totalPrice?.hasError}
        {...getOverrideProps(overrides, "totalPrice")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              quantitySold,
              salesDate,
              totalPrice,
              employeeID: value,
              customerID,
              materialID,
            };
            const result = onChange(modelFields);
            value = result?.employeeID ?? value;
          }
          setEmployeeID(value);
          setCurrentEmployeeIDValue(undefined);
        }}
        currentFieldValue={currentEmployeeIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Employee id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={employeeID ? [employeeID] : []}
        hasError={errors?.employeeID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("employeeID", currentEmployeeIDValue)
        }
        errorMessage={errors?.employeeID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.employeeID(
                employeeIDRecords.find((r) => r.id === value) ??
                  selectedEmployeeIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentEmployeeIDDisplayValue(
            value
              ? getDisplayValue.employeeID(
                  employeeIDRecords.find((r) => r.id === value) ??
                    selectedEmployeeIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentEmployeeIDValue(value);
          const selectedRecord = employeeIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedEmployeeIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={employeeIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Employee id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Employee"
          value={currentEmployeeIDDisplayValue}
          options={employeeIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.employeeID?.(r),
            }))}
          isLoading={employeeIDLoading}
          onSelect={({ id, label }) => {
            setCurrentEmployeeIDValue(id);
            setCurrentEmployeeIDDisplayValue(label);
            runValidationTasks("employeeID", label);
          }}
          onClear={() => {
            setCurrentEmployeeIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEmployeeIDRecords(value);
            if (errors.employeeID?.hasError) {
              runValidationTasks("employeeID", value);
            }
            setCurrentEmployeeIDDisplayValue(value);
            setCurrentEmployeeIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("employeeID", currentEmployeeIDValue)
          }
          errorMessage={errors.employeeID?.errorMessage}
          hasError={errors.employeeID?.hasError}
          ref={employeeIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "employeeID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              quantitySold,
              salesDate,
              totalPrice,
              employeeID,
              customerID: value,
              materialID,
            };
            const result = onChange(modelFields);
            value = result?.customerID ?? value;
          }
          setCustomerID(value);
          setCurrentCustomerIDValue(undefined);
        }}
        currentFieldValue={currentCustomerIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Customer id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={customerID ? [customerID] : []}
        hasError={errors?.customerID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("customerID", currentCustomerIDValue)
        }
        errorMessage={errors?.customerID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.customerID(
                customerIDRecords.find((r) => r.id === value) ??
                  selectedCustomerIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCustomerIDDisplayValue(
            value
              ? getDisplayValue.customerID(
                  customerIDRecords.find((r) => r.id === value) ??
                    selectedCustomerIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCustomerIDValue(value);
          const selectedRecord = customerIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedCustomerIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={customerIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Customer id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomerIDDisplayValue}
          options={customerIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.customerID?.(r),
            }))}
          isLoading={customerIDLoading}
          onSelect={({ id, label }) => {
            setCurrentCustomerIDValue(id);
            setCurrentCustomerIDDisplayValue(label);
            runValidationTasks("customerID", label);
          }}
          onClear={() => {
            setCurrentCustomerIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCustomerIDRecords(value);
            if (errors.customerID?.hasError) {
              runValidationTasks("customerID", value);
            }
            setCurrentCustomerIDDisplayValue(value);
            setCurrentCustomerIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("customerID", currentCustomerIDValue)
          }
          errorMessage={errors.customerID?.errorMessage}
          hasError={errors.customerID?.hasError}
          ref={customerIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "customerID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              quantitySold,
              salesDate,
              totalPrice,
              employeeID,
              customerID,
              materialID: value,
            };
            const result = onChange(modelFields);
            value = result?.materialID ?? value;
          }
          setMaterialID(value);
          setCurrentMaterialIDValue(undefined);
        }}
        currentFieldValue={currentMaterialIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Material id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={materialID ? [materialID] : []}
        hasError={errors?.materialID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("materialID", currentMaterialIDValue)
        }
        errorMessage={errors?.materialID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.materialID(
                materialIDRecords.find((r) => r.id === value) ??
                  selectedMaterialIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMaterialIDDisplayValue(
            value
              ? getDisplayValue.materialID(
                  materialIDRecords.find((r) => r.id === value) ??
                    selectedMaterialIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMaterialIDValue(value);
          const selectedRecord = materialIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedMaterialIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={materialIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Material id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Material"
          value={currentMaterialIDDisplayValue}
          options={materialIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.materialID?.(r),
            }))}
          isLoading={materialIDLoading}
          onSelect={({ id, label }) => {
            setCurrentMaterialIDValue(id);
            setCurrentMaterialIDDisplayValue(label);
            runValidationTasks("materialID", label);
          }}
          onClear={() => {
            setCurrentMaterialIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchMaterialIDRecords(value);
            if (errors.materialID?.hasError) {
              runValidationTasks("materialID", value);
            }
            setCurrentMaterialIDDisplayValue(value);
            setCurrentMaterialIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("materialID", currentMaterialIDValue)
          }
          errorMessage={errors.materialID?.errorMessage}
          hasError={errors.materialID?.hasError}
          ref={materialIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "materialID")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
