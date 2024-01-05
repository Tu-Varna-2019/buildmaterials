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
import { getPosition, listEmployees } from "../graphql/queries";
import { updateEmployee, updatePosition } from "../graphql/mutations";
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
export default function PositionSearch(props) {
  const {
    id: idProp,
    position: positionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    items: undefined,
    name: "",
    Employees: [],
  };
  const [items, setItems] = React.useState(initialValues.items);
  const [name, setName] = React.useState(initialValues.name);
  const [Employees, setEmployees] = React.useState(initialValues.Employees);
  const [EmployeesLoading, setEmployeesLoading] = React.useState(false);
  const [employeesRecords, setEmployeesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = positionRecord
      ? { ...initialValues, ...positionRecord, Employees: linkedEmployees }
      : initialValues;
    setItems(cleanValues.items);
    setName(cleanValues.name);
    setEmployees(cleanValues.Employees ?? []);
    setCurrentEmployeesValue(undefined);
    setCurrentEmployeesDisplayValue("");
    setErrors({});
  };
  const [positionRecord, setPositionRecord] = React.useState(positionModelProp);
  const [linkedEmployees, setLinkedEmployees] = React.useState([]);
  const canUnlinkEmployees = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getPosition.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getPosition
        : positionModelProp;
      const linkedEmployees = record?.Employees?.items ?? [];
      setLinkedEmployees(linkedEmployees);
      setPositionRecord(record);
    };
    queryData();
  }, [idProp, positionModelProp]);
  React.useEffect(resetStateValues, [positionRecord, linkedEmployees]);
  const [currentEmployeesDisplayValue, setCurrentEmployeesDisplayValue] =
    React.useState("");
  const [currentEmployeesValue, setCurrentEmployeesValue] =
    React.useState(undefined);
  const EmployeesRef = React.createRef();
  const getIDValue = {
    Employees: (r) => JSON.stringify({ id: r?.id }),
  };
  const EmployeesIdSet = new Set(
    Array.isArray(Employees)
      ? Employees.map((r) => getIDValue.Employees?.(r))
      : getIDValue.Employees?.(Employees)
  );
  const getDisplayValue = {
    Employees: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    items: [],
    name: [],
    Employees: [],
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
  const fetchEmployeesRecords = async (value) => {
    setEmployeesLoading(true);
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
      var loaded = result.filter(
        (item) => !EmployeesIdSet.has(getIDValue.Employees?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEmployeesRecords(newOptions.slice(0, autocompleteLength));
    setEmployeesLoading(false);
  };
  React.useEffect(() => {
    fetchEmployeesRecords("");
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
          items: items ?? null,
          name: name ?? null,
          Employees: Employees ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          const promises = [];
          const employeesToLink = [];
          const employeesToUnLink = [];
          const employeesSet = new Set();
          const linkedEmployeesSet = new Set();
          Employees.forEach((r) => employeesSet.add(getIDValue.Employees?.(r)));
          linkedEmployees.forEach((r) =>
            linkedEmployeesSet.add(getIDValue.Employees?.(r))
          );
          linkedEmployees.forEach((r) => {
            if (!employeesSet.has(getIDValue.Employees?.(r))) {
              employeesToUnLink.push(r);
            }
          });
          Employees.forEach((r) => {
            if (!linkedEmployeesSet.has(getIDValue.Employees?.(r))) {
              employeesToLink.push(r);
            }
          });
          employeesToUnLink.forEach((original) => {
            if (!canUnlinkEmployees) {
              throw Error(
                `Employee ${original.id} cannot be unlinked from Position because positionID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateEmployee.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    positionID: null,
                  },
                },
              })
            );
          });
          employeesToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateEmployee.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    positionID: positionRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
          };
          promises.push(
            client.graphql({
              query: updatePosition.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: positionRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PositionSearch")}
      {...rest}
    >
      <Autocomplete
        label="Position"
        options={[]}
        onSelect={({ id, label }) => {
          setItems(id);
          runValidationTasks("items", id);
        }}
        onClear={() => {
          setItems("");
        }}
        defaultValue={items}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items: value,
              name,
              Employees,
            };
            const result = onChange(modelFields);
            value = result?.items ?? value;
          }
          if (errors.items?.hasError) {
            runValidationTasks("items", value);
          }
          setItems(value);
        }}
        onBlur={() => runValidationTasks("items", items)}
        errorMessage={errors.items?.errorMessage}
        hasError={errors.items?.hasError}
        labelHidden={false}
        {...getOverrideProps(overrides, "items")}
      ></Autocomplete>
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              items,
              name: value,
              Employees,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              items,
              name,
              Employees: values,
            };
            const result = onChange(modelFields);
            values = result?.Employees ?? values;
          }
          setEmployees(values);
          setCurrentEmployeesValue(undefined);
          setCurrentEmployeesDisplayValue("");
        }}
        currentFieldValue={currentEmployeesValue}
        label={"Employees"}
        items={Employees}
        hasError={errors?.Employees?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Employees", currentEmployeesValue)
        }
        errorMessage={errors?.Employees?.errorMessage}
        getBadgeText={getDisplayValue.Employees}
        setFieldValue={(model) => {
          setCurrentEmployeesDisplayValue(
            model ? getDisplayValue.Employees(model) : ""
          );
          setCurrentEmployeesValue(model);
        }}
        inputFieldRef={EmployeesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Employees"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Employee"
          value={currentEmployeesDisplayValue}
          options={employeesRecords
            .filter((r) => !EmployeesIdSet.has(getIDValue.Employees?.(r)))
            .map((r) => ({
              id: getIDValue.Employees?.(r),
              label: getDisplayValue.Employees?.(r),
            }))}
          isLoading={EmployeesLoading}
          onSelect={({ id, label }) => {
            setCurrentEmployeesValue(
              employeesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEmployeesDisplayValue(label);
            runValidationTasks("Employees", label);
          }}
          onClear={() => {
            setCurrentEmployeesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEmployeesRecords(value);
            if (errors.Employees?.hasError) {
              runValidationTasks("Employees", value);
            }
            setCurrentEmployeesDisplayValue(value);
            setCurrentEmployeesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Employees", currentEmployeesDisplayValue)
          }
          errorMessage={errors.Employees?.errorMessage}
          hasError={errors.Employees?.hasError}
          ref={EmployeesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Employees")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        ></Flex>
      </Flex>
    </Grid>
  );
}
