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
import { listMalls, listPositions } from "../graphql/queries";
import { createEmployee } from "../graphql/mutations";
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
export default function EmployeeCreateForm(props) {
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
    positionID: undefined,
    mallID: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [positionID, setPositionID] = React.useState(initialValues.positionID);
  const [positionIDLoading, setPositionIDLoading] = React.useState(false);
  const [positionIDRecords, setPositionIDRecords] = React.useState([]);
  const [selectedPositionIDRecords, setSelectedPositionIDRecords] =
    React.useState([]);
  const [mallID, setMallID] = React.useState(initialValues.mallID);
  const [mallIDLoading, setMallIDLoading] = React.useState(false);
  const [mallIDRecords, setMallIDRecords] = React.useState([]);
  const [selectedMallIDRecords, setSelectedMallIDRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setPositionID(initialValues.positionID);
    setCurrentPositionIDValue(undefined);
    setCurrentPositionIDDisplayValue("");
    setMallID(initialValues.mallID);
    setCurrentMallIDValue(undefined);
    setCurrentMallIDDisplayValue("");
    setErrors({});
  };
  const [currentPositionIDDisplayValue, setCurrentPositionIDDisplayValue] =
    React.useState("");
  const [currentPositionIDValue, setCurrentPositionIDValue] =
    React.useState(undefined);
  const positionIDRef = React.createRef();
  const [currentMallIDDisplayValue, setCurrentMallIDDisplayValue] =
    React.useState("");
  const [currentMallIDValue, setCurrentMallIDValue] = React.useState(undefined);
  const mallIDRef = React.createRef();
  const getDisplayValue = {
    positionID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    mallID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [{ type: "Required" }],
    phone: [{ type: "Phone" }],
    positionID: [{ type: "Required" }],
    mallID: [{ type: "Required" }],
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
  const fetchPositionIDRecords = async (value) => {
    setPositionIDLoading(true);
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
          query: listPositions.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listPositions?.items;
      var loaded = result.filter((item) => positionID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setPositionIDRecords(newOptions.slice(0, autocompleteLength));
    setPositionIDLoading(false);
  };
  const fetchMallIDRecords = async (value) => {
    setMallIDLoading(true);
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
          query: listMalls.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMalls?.items;
      var loaded = result.filter((item) => mallID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMallIDRecords(newOptions.slice(0, autocompleteLength));
    setMallIDLoading(false);
  };
  React.useEffect(() => {
    fetchPositionIDRecords("");
    fetchMallIDRecords("");
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
          positionID,
          mallID,
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
            query: createEmployee.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "EmployeeCreateForm")}
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
              positionID,
              mallID,
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
              positionID,
              mallID,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              phone,
              positionID: value,
              mallID,
            };
            const result = onChange(modelFields);
            value = result?.positionID ?? value;
          }
          setPositionID(value);
          setCurrentPositionIDValue(undefined);
        }}
        currentFieldValue={currentPositionIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Position id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={positionID ? [positionID] : []}
        hasError={errors?.positionID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("positionID", currentPositionIDValue)
        }
        errorMessage={errors?.positionID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.positionID(
                positionIDRecords.find((r) => r.id === value) ??
                  selectedPositionIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentPositionIDDisplayValue(
            value
              ? getDisplayValue.positionID(
                  positionIDRecords.find((r) => r.id === value) ??
                    selectedPositionIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentPositionIDValue(value);
          const selectedRecord = positionIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedPositionIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={positionIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Position id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Position"
          value={currentPositionIDDisplayValue}
          options={positionIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.positionID?.(r),
            }))}
          isLoading={positionIDLoading}
          onSelect={({ id, label }) => {
            setCurrentPositionIDValue(id);
            setCurrentPositionIDDisplayValue(label);
            runValidationTasks("positionID", label);
          }}
          onClear={() => {
            setCurrentPositionIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchPositionIDRecords(value);
            if (errors.positionID?.hasError) {
              runValidationTasks("positionID", value);
            }
            setCurrentPositionIDDisplayValue(value);
            setCurrentPositionIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("positionID", currentPositionIDValue)
          }
          errorMessage={errors.positionID?.errorMessage}
          hasError={errors.positionID?.hasError}
          ref={positionIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "positionID")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              phone,
              positionID,
              mallID: value,
            };
            const result = onChange(modelFields);
            value = result?.mallID ?? value;
          }
          setMallID(value);
          setCurrentMallIDValue(undefined);
        }}
        currentFieldValue={currentMallIDValue}
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Mall id</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        items={mallID ? [mallID] : []}
        hasError={errors?.mallID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("mallID", currentMallIDValue)
        }
        errorMessage={errors?.mallID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.mallID(
                mallIDRecords.find((r) => r.id === value) ??
                  selectedMallIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMallIDDisplayValue(
            value
              ? getDisplayValue.mallID(
                  mallIDRecords.find((r) => r.id === value) ??
                    selectedMallIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMallIDValue(value);
          const selectedRecord = mallIDRecords.find((r) => r.id === value);
          if (selectedRecord) {
            setSelectedMallIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={mallIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Mall id</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          placeholder="Search Mall"
          value={currentMallIDDisplayValue}
          options={mallIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.mallID?.(r),
            }))}
          isLoading={mallIDLoading}
          onSelect={({ id, label }) => {
            setCurrentMallIDValue(id);
            setCurrentMallIDDisplayValue(label);
            runValidationTasks("mallID", label);
          }}
          onClear={() => {
            setCurrentMallIDDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchMallIDRecords(value);
            if (errors.mallID?.hasError) {
              runValidationTasks("mallID", value);
            }
            setCurrentMallIDDisplayValue(value);
            setCurrentMallIDValue(undefined);
          }}
          onBlur={() => runValidationTasks("mallID", currentMallIDValue)}
          errorMessage={errors.mallID?.errorMessage}
          hasError={errors.mallID?.hasError}
          ref={mallIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "mallID")}
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
