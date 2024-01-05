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
import { getCompany, listCustomers } from "../graphql/queries";
import { updateCompany, updateCustomer } from "../graphql/mutations";
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
export default function CompanySearch(props) {
  const {
    id: idProp,
    company: companyModelProp,
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
    Customers: [],
  };
  const [items, setItems] = React.useState(initialValues.items);
  const [name, setName] = React.useState(initialValues.name);
  const [Customers, setCustomers] = React.useState(initialValues.Customers);
  const [CustomersLoading, setCustomersLoading] = React.useState(false);
  const [customersRecords, setCustomersRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = companyRecord
      ? { ...initialValues, ...companyRecord, Customers: linkedCustomers }
      : initialValues;
    setItems(cleanValues.items);
    setName(cleanValues.name);
    setCustomers(cleanValues.Customers ?? []);
    setCurrentCustomersValue(undefined);
    setCurrentCustomersDisplayValue("");
    setErrors({});
  };
  const [companyRecord, setCompanyRecord] = React.useState(companyModelProp);
  const [linkedCustomers, setLinkedCustomers] = React.useState([]);
  const canUnlinkCustomers = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCompany.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCompany
        : companyModelProp;
      const linkedCustomers = record?.Customers?.items ?? [];
      setLinkedCustomers(linkedCustomers);
      setCompanyRecord(record);
    };
    queryData();
  }, [idProp, companyModelProp]);
  React.useEffect(resetStateValues, [companyRecord, linkedCustomers]);
  const [currentCustomersDisplayValue, setCurrentCustomersDisplayValue] =
    React.useState("");
  const [currentCustomersValue, setCurrentCustomersValue] =
    React.useState(undefined);
  const CustomersRef = React.createRef();
  const getIDValue = {
    Customers: (r) => JSON.stringify({ id: r?.id }),
  };
  const CustomersIdSet = new Set(
    Array.isArray(Customers)
      ? Customers.map((r) => getIDValue.Customers?.(r))
      : getIDValue.Customers?.(Customers)
  );
  const getDisplayValue = {
    Customers: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    items: [],
    name: [],
    Customers: [],
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
  const fetchCustomersRecords = async (value) => {
    setCustomersLoading(true);
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
      var loaded = result.filter(
        (item) => !CustomersIdSet.has(getIDValue.Customers?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setCustomersRecords(newOptions.slice(0, autocompleteLength));
    setCustomersLoading(false);
  };
  React.useEffect(() => {
    fetchCustomersRecords("");
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
          Customers: Customers ?? null,
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
          const customersToLink = [];
          const customersToUnLink = [];
          const customersSet = new Set();
          const linkedCustomersSet = new Set();
          Customers.forEach((r) => customersSet.add(getIDValue.Customers?.(r)));
          linkedCustomers.forEach((r) =>
            linkedCustomersSet.add(getIDValue.Customers?.(r))
          );
          linkedCustomers.forEach((r) => {
            if (!customersSet.has(getIDValue.Customers?.(r))) {
              customersToUnLink.push(r);
            }
          });
          Customers.forEach((r) => {
            if (!linkedCustomersSet.has(getIDValue.Customers?.(r))) {
              customersToLink.push(r);
            }
          });
          customersToUnLink.forEach((original) => {
            if (!canUnlinkCustomers) {
              throw Error(
                `Customer ${original.id} cannot be unlinked from Company because companyID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateCustomer.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    companyID: null,
                  },
                },
              })
            );
          });
          customersToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateCustomer.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    companyID: companyRecord.id,
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
              query: updateCompany.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: companyRecord.id,
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
      {...getOverrideProps(overrides, "CompanySearch")}
      {...rest}
    >
      <Autocomplete
        label="Company"
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
              Customers,
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
              Customers,
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
              Customers: values,
            };
            const result = onChange(modelFields);
            values = result?.Customers ?? values;
          }
          setCustomers(values);
          setCurrentCustomersValue(undefined);
          setCurrentCustomersDisplayValue("");
        }}
        currentFieldValue={currentCustomersValue}
        label={"Customers"}
        items={Customers}
        hasError={errors?.Customers?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Customers", currentCustomersValue)
        }
        errorMessage={errors?.Customers?.errorMessage}
        getBadgeText={getDisplayValue.Customers}
        setFieldValue={(model) => {
          setCurrentCustomersDisplayValue(
            model ? getDisplayValue.Customers(model) : ""
          );
          setCurrentCustomersValue(model);
        }}
        inputFieldRef={CustomersRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Customers"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomersDisplayValue}
          options={customersRecords
            .filter((r) => !CustomersIdSet.has(getIDValue.Customers?.(r)))
            .map((r) => ({
              id: getIDValue.Customers?.(r),
              label: getDisplayValue.Customers?.(r),
            }))}
          isLoading={CustomersLoading}
          onSelect={({ id, label }) => {
            setCurrentCustomersValue(
              customersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCustomersDisplayValue(label);
            runValidationTasks("Customers", label);
          }}
          onClear={() => {
            setCurrentCustomersDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchCustomersRecords(value);
            if (errors.Customers?.hasError) {
              runValidationTasks("Customers", value);
            }
            setCurrentCustomersDisplayValue(value);
            setCurrentCustomersValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Customers", currentCustomersDisplayValue)
          }
          errorMessage={errors.Customers?.errorMessage}
          hasError={errors.Customers?.hasError}
          ref={CustomersRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Customers")}
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
