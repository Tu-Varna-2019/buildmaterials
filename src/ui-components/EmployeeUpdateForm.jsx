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
import { getEmployee, listSales } from "../graphql/queries";
import { updateEmployee, updateSales } from "../graphql/mutations";
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
export default function EmployeeUpdateForm(props) {
  const {
    id: idProp,
    employee: employeeModelProp,
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
    molAssigned: "",
    position: "",
    Sales: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [molAssigned, setMolAssigned] = React.useState(
    initialValues.molAssigned
  );
  const [position, setPosition] = React.useState(initialValues.position);
  const [Sales, setSales] = React.useState(initialValues.Sales);
  const [SalesLoading, setSalesLoading] = React.useState(false);
  const [salesRecords, setSalesRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = employeeRecord
      ? { ...initialValues, ...employeeRecord, Sales: linkedSales }
      : initialValues;
    setName(cleanValues.name);
    setPhone(cleanValues.phone);
    setMolAssigned(cleanValues.molAssigned);
    setPosition(cleanValues.position);
    setSales(cleanValues.Sales ?? []);
    setCurrentSalesValue(undefined);
    setCurrentSalesDisplayValue("");
    setErrors({});
  };
  const [employeeRecord, setEmployeeRecord] = React.useState(employeeModelProp);
  const [linkedSales, setLinkedSales] = React.useState([]);
  const canUnlinkSales = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getEmployee.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEmployee
        : employeeModelProp;
      const linkedSales = record?.Sales?.items ?? [];
      setLinkedSales(linkedSales);
      setEmployeeRecord(record);
    };
    queryData();
  }, [idProp, employeeModelProp]);
  React.useEffect(resetStateValues, [employeeRecord, linkedSales]);
  const [currentSalesDisplayValue, setCurrentSalesDisplayValue] =
    React.useState("");
  const [currentSalesValue, setCurrentSalesValue] = React.useState(undefined);
  const SalesRef = React.createRef();
  const getIDValue = {
    Sales: (r) => JSON.stringify({ id: r?.id }),
  };
  const SalesIdSet = new Set(
    Array.isArray(Sales)
      ? Sales.map((r) => getIDValue.Sales?.(r))
      : getIDValue.Sales?.(Sales)
  );
  const getDisplayValue = {
    Sales: (r) => `${r?.quantitySold ? r?.quantitySold + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    phone: [{ type: "Phone" }],
    molAssigned: [],
    position: [],
    Sales: [],
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
  const fetchSalesRecords = async (value) => {
    setSalesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { quantitySold: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await client.graphql({
          query: listSales.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listSales?.items;
      var loaded = result.filter(
        (item) => !SalesIdSet.has(getIDValue.Sales?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setSalesRecords(newOptions.slice(0, autocompleteLength));
    setSalesLoading(false);
  };
  React.useEffect(() => {
    fetchSalesRecords("");
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
          name: name ?? null,
          phone: phone ?? null,
          molAssigned: molAssigned ?? null,
          position: position ?? null,
          Sales: Sales ?? null,
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
          const salesToLink = [];
          const salesToUnLink = [];
          const salesSet = new Set();
          const linkedSalesSet = new Set();
          Sales.forEach((r) => salesSet.add(getIDValue.Sales?.(r)));
          linkedSales.forEach((r) => linkedSalesSet.add(getIDValue.Sales?.(r)));
          linkedSales.forEach((r) => {
            if (!salesSet.has(getIDValue.Sales?.(r))) {
              salesToUnLink.push(r);
            }
          });
          Sales.forEach((r) => {
            if (!linkedSalesSet.has(getIDValue.Sales?.(r))) {
              salesToLink.push(r);
            }
          });
          salesToUnLink.forEach((original) => {
            if (!canUnlinkSales) {
              throw Error(
                `Sales ${original.id} cannot be unlinked from Employee because employeeID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateSales.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    employeeID: null,
                  },
                },
              })
            );
          });
          salesToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateSales.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    employeeID: employeeRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
            phone: modelFields.phone ?? null,
            molAssigned: modelFields.molAssigned ?? null,
            position: modelFields.position ?? null,
          };
          promises.push(
            client.graphql({
              query: updateEmployee.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: employeeRecord.id,
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
      {...getOverrideProps(overrides, "EmployeeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
              molAssigned,
              position,
              Sales,
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
              molAssigned,
              position,
              Sales,
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
      <TextField
        label="Mol assigned"
        isRequired={false}
        isReadOnly={false}
        value={molAssigned}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              molAssigned: value,
              position,
              Sales,
            };
            const result = onChange(modelFields);
            value = result?.molAssigned ?? value;
          }
          if (errors.molAssigned?.hasError) {
            runValidationTasks("molAssigned", value);
          }
          setMolAssigned(value);
        }}
        onBlur={() => runValidationTasks("molAssigned", molAssigned)}
        errorMessage={errors.molAssigned?.errorMessage}
        hasError={errors.molAssigned?.hasError}
        {...getOverrideProps(overrides, "molAssigned")}
      ></TextField>
      <TextField
        label="Position"
        isRequired={false}
        isReadOnly={false}
        value={position}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              molAssigned,
              position: value,
              Sales,
            };
            const result = onChange(modelFields);
            value = result?.position ?? value;
          }
          if (errors.position?.hasError) {
            runValidationTasks("position", value);
          }
          setPosition(value);
        }}
        onBlur={() => runValidationTasks("position", position)}
        errorMessage={errors.position?.errorMessage}
        hasError={errors.position?.hasError}
        {...getOverrideProps(overrides, "position")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              phone,
              molAssigned,
              position,
              Sales: values,
            };
            const result = onChange(modelFields);
            values = result?.Sales ?? values;
          }
          setSales(values);
          setCurrentSalesValue(undefined);
          setCurrentSalesDisplayValue("");
        }}
        currentFieldValue={currentSalesValue}
        label={"Sales"}
        items={Sales}
        hasError={errors?.Sales?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Sales", currentSalesValue)
        }
        errorMessage={errors?.Sales?.errorMessage}
        getBadgeText={getDisplayValue.Sales}
        setFieldValue={(model) => {
          setCurrentSalesDisplayValue(
            model ? getDisplayValue.Sales(model) : ""
          );
          setCurrentSalesValue(model);
        }}
        inputFieldRef={SalesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Sales"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Sales"
          value={currentSalesDisplayValue}
          options={salesRecords
            .filter((r) => !SalesIdSet.has(getIDValue.Sales?.(r)))
            .map((r) => ({
              id: getIDValue.Sales?.(r),
              label: getDisplayValue.Sales?.(r),
            }))}
          isLoading={SalesLoading}
          onSelect={({ id, label }) => {
            setCurrentSalesValue(
              salesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentSalesDisplayValue(label);
            runValidationTasks("Sales", label);
          }}
          onClear={() => {
            setCurrentSalesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchSalesRecords(value);
            if (errors.Sales?.hasError) {
              runValidationTasks("Sales", value);
            }
            setCurrentSalesDisplayValue(value);
            setCurrentSalesValue(undefined);
          }}
          onBlur={() => runValidationTasks("Sales", currentSalesDisplayValue)}
          errorMessage={errors.Sales?.errorMessage}
          hasError={errors.Sales?.hasError}
          ref={SalesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Sales")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || employeeModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || employeeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
