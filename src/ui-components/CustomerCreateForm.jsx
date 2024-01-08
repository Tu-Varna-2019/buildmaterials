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
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { listCompanies } from "../graphql/queries";
import { createCustomer } from "../graphql/mutations";
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
export default function CustomerCreateForm(props) {
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
    name: "",
    phone: "",
    invoiceStatus: false,
    bulstat: "",
    companyID: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [invoiceStatus, setInvoiceStatus] = React.useState(
    initialValues.invoiceStatus
  );
  const [bulstat, setBulstat] = React.useState(initialValues.bulstat);
  const [companyID, setCompanyID] = React.useState(initialValues.companyID);
  const [companyIDLoading, setCompanyIDLoading] = React.useState(false);
  const [companyIDRecords, setCompanyIDRecords] = React.useState([]);
  const [selectedCompanyIDRecords, setSelectedCompanyIDRecords] =
    React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setInvoiceStatus(initialValues.invoiceStatus);
    setBulstat(initialValues.bulstat);
    setCompanyID(initialValues.companyID);
    setCurrentCompanyIDValue(undefined);
    setCurrentCompanyIDDisplayValue("");
    setErrors({});
  };
  const [currentCompanyIDDisplayValue, setCurrentCompanyIDDisplayValue] =
    React.useState("");
  const [currentCompanyIDValue, setCurrentCompanyIDValue] =
    React.useState(undefined);
  const companyIDRef = React.createRef();
  const getDisplayValue = {
    companyID: (r) => `${r?.name}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    phone: [{ type: "Phone" }],
    invoiceStatus: [],
    bulstat: [{ type: "Required" }],
    companyID: [{ type: "Required" }],
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
  const fetchCompanyIDRecords = async (value) => {
    setCompanyIDLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: { or: [{ name: { contains: value } }] },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listCompanies.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listCompanies?.items;
      var loaded = result.filter((item) => companyID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCompanyIDRecords(newOptions.slice(0, autocompleteLength));
    setCompanyIDLoading(false);
  };
  React.useEffect(() => {
    fetchCompanyIDRecords("");
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
          name,
          phone,
          invoiceStatus,
          bulstat,
          companyID,
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
            query: createCustomer.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CustomerCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
              invoiceStatus,
              bulstat,
              companyID,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone: value,
              invoiceStatus,
              bulstat,
              companyID,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <SwitchField
        label="Invoice status"
        defaultChecked={false}
        isDisabled={false}
        isChecked={invoiceStatus}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              invoiceStatus: value,
              bulstat,
              companyID,
            };
            const result = onChange(modelFields);
            value = result?.invoiceStatus ?? value;
          }
          if (errors.invoiceStatus?.hasError) {
            runValidationTasks("invoiceStatus", value);
          }
          setInvoiceStatus(value);
        }}
        onBlur={() => runValidationTasks("invoiceStatus", invoiceStatus)}
        errorMessage={errors.invoiceStatus?.errorMessage}
        hasError={errors.invoiceStatus?.hasError}
        {...getOverrideProps(overrides, "invoiceStatus")}
      ></SwitchField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Bulstat</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={bulstat}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              invoiceStatus,
              bulstat: value,
              companyID,
            };
            const result = onChange(modelFields);
            value = result?.bulstat ?? value;
          }
          if (errors.bulstat?.hasError) {
            runValidationTasks("bulstat", value);
          }
          setBulstat(value);
        }}
        onBlur={() => runValidationTasks("bulstat", bulstat)}
        errorMessage={errors.bulstat?.errorMessage}
        hasError={errors.bulstat?.hasError}
        {...getOverrideProps(overrides, "bulstat")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              phone,
              invoiceStatus,
              bulstat,
              companyID: value,
            };
            const result = onChange(modelFields);
            value = result?.companyID ?? value;
          }
          setCompanyID(value);
          setCurrentCompanyIDValue(undefined);
        }}
        currentFieldValue={currentCompanyIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Company id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={companyID ? [companyID] : []}
        hasError={errors?.companyID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("companyID", currentCompanyIDValue)
        }
        errorMessage={errors?.companyID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.companyID(
                companyIDRecords.find((r) => r.id === value) ??
                  selectedCompanyIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentCompanyIDDisplayValue(
            value
              ? getDisplayValue.companyID(
                  companyIDRecords.find((r) => r.id === value) ??
                    selectedCompanyIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentCompanyIDValue(value);
          const selectedRecord = companyIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedCompanyIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={companyIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Company id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Company"
          value={currentCompanyIDDisplayValue}
          options={companyIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.companyID?.(r),
            }))}
          isLoading={companyIDLoading}
          onSelect={({ id, label }) => {
            setCurrentCompanyIDValue(id);
            setCurrentCompanyIDDisplayValue(label);
            runValidationTasks("companyID", label);
          }}
          onClear={() => {
            setCurrentCompanyIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCompanyIDRecords(value);
            if (errors.companyID?.hasError) {
              runValidationTasks("companyID", value);
            }
            setCurrentCompanyIDDisplayValue(value);
            setCurrentCompanyIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("companyID", currentCompanyIDValue)}
          errorMessage={errors.companyID?.errorMessage}
          hasError={errors.companyID?.hasError}
          ref={companyIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "companyID")}
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
