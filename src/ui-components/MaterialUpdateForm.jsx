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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import {
  getMaterial,
  getMaterialType,
  listMaterialTypes,
} from "../graphql/queries";
import { updateMaterial } from "../graphql/mutations";
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
export default function MaterialUpdateForm(props) {
  const {
    id: idProp,
    material: materialModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    quantityAvailable: "",
    price: "",
    materialtypeID: undefined,
    items: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [quantityAvailable, setQuantityAvailable] = React.useState(
    initialValues.quantityAvailable
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [materialtypeID, setMaterialtypeID] = React.useState(
    initialValues.materialtypeID
  );
  const [materialtypeIDLoading, setMaterialtypeIDLoading] =
    React.useState(false);
  const [materialtypeIDRecords, setMaterialtypeIDRecords] = React.useState([]);
  const [selectedMaterialtypeIDRecords, setSelectedMaterialtypeIDRecords] =
    React.useState([]);
  const [items, setItems] = React.useState(initialValues.items);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = materialRecord
      ? { ...initialValues, ...materialRecord, materialtypeID }
      : initialValues;
    setName(cleanValues.name);
    setQuantityAvailable(cleanValues.quantityAvailable);
    setPrice(cleanValues.price);
    setMaterialtypeID(cleanValues.materialtypeID);
    setCurrentMaterialtypeIDValue(undefined);
    setCurrentMaterialtypeIDDisplayValue("");
    setItems(cleanValues.items);
    setErrors({});
  };
  const [materialRecord, setMaterialRecord] = React.useState(materialModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMaterial.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMaterial
        : materialModelProp;
      const materialtypeIDRecord = record ? record.materialtypeID : undefined;
      const materialTypeRecord = materialtypeIDRecord
        ? (
            await client.graphql({
              query: getMaterialType.replaceAll("__typename", ""),
              variables: { id: materialtypeIDRecord },
            })
          )?.data?.getMaterialType
        : undefined;
      setMaterialtypeID(materialtypeIDRecord);
      setSelectedMaterialtypeIDRecords([materialTypeRecord]);
      setMaterialRecord(record);
    };
    queryData();
  }, [idProp, materialModelProp]);
  React.useEffect(resetStateValues, [materialRecord, materialtypeID]);
  const [
    currentMaterialtypeIDDisplayValue,
    setCurrentMaterialtypeIDDisplayValue,
  ] = React.useState("");
  const [currentMaterialtypeIDValue, setCurrentMaterialtypeIDValue] =
    React.useState(undefined);
  const materialtypeIDRef = React.createRef();
  const getDisplayValue = {
    materialtypeID: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    quantityAvailable: [],
    price: [],
    materialtypeID: [{ type: "Required" }],
    items: [],
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
  const fetchMaterialtypeIDRecords = async (value) => {
    setMaterialtypeIDLoading(true);
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
          query: listMaterialTypes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMaterialTypes?.items;
      var loaded = result.filter((item) => materialtypeID !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMaterialtypeIDRecords(newOptions.slice(0, autocompleteLength));
    setMaterialtypeIDLoading(false);
  };
  React.useEffect(() => {
    fetchMaterialtypeIDRecords("");
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
          quantityAvailable: quantityAvailable ?? null,
          price: price ?? null,
          materialtypeID,
          items: items ?? null,
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
          const modelFieldsToSave = {
            name: modelFields.name ?? null,
            quantityAvailable: modelFields.quantityAvailable ?? null,
            price: modelFields.price ?? null,
            materialtypeID: modelFields.materialtypeID,
          };
          await client.graphql({
            query: updateMaterial.replaceAll("__typename", ""),
            variables: {
              input: {
                id: materialRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
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
      {...getOverrideProps(overrides, "MaterialUpdateForm")}
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
              quantityAvailable,
              price,
              materialtypeID,
              items,
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
        label="Quantity available"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantityAvailable}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantityAvailable: value,
              price,
              materialtypeID,
              items,
            };
            const result = onChange(modelFields);
            value = result?.quantityAvailable ?? value;
          }
          if (errors.quantityAvailable?.hasError) {
            runValidationTasks("quantityAvailable", value);
          }
          setQuantityAvailable(value);
        }}
        onBlur={() =>
          runValidationTasks("quantityAvailable", quantityAvailable)
        }
        errorMessage={errors.quantityAvailable?.errorMessage}
        hasError={errors.quantityAvailable?.hasError}
        {...getOverrideProps(overrides, "quantityAvailable")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              quantityAvailable,
              price: value,
              materialtypeID,
              items,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              quantityAvailable,
              price,
              materialtypeID: value,
              items,
            };
            const result = onChange(modelFields);
            value = result?.materialtypeID ?? value;
          }
          setMaterialtypeID(value);
          setCurrentMaterialtypeIDValue(undefined);
        }}
        currentFieldValue={currentMaterialtypeIDValue}
        label={"Materialtype id"}
        items={materialtypeID ? [materialtypeID] : []}
        hasError={errors?.materialtypeID?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("materialtypeID", currentMaterialtypeIDValue)
        }
        errorMessage={errors?.materialtypeID?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.materialtypeID(
                materialtypeIDRecords.find((r) => r.id === value) ??
                  selectedMaterialtypeIDRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMaterialtypeIDDisplayValue(
            value
              ? getDisplayValue.materialtypeID(
                  materialtypeIDRecords.find((r) => r.id === value) ??
                    selectedMaterialtypeIDRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMaterialtypeIDValue(value);
          const selectedRecord = materialtypeIDRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedMaterialtypeIDRecords([selectedRecord]);
          }
        }}
        inputFieldRef={materialtypeIDRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Materialtype id"
          isRequired={true}
          isReadOnly={false}
          placeholder="Search MaterialType"
          value={currentMaterialtypeIDDisplayValue}
          options={materialtypeIDRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.materialtypeID?.(r),
            }))}
          isLoading={materialtypeIDLoading}
          onSelect={({ id, label }) => {
            setCurrentMaterialtypeIDValue(id);
            setCurrentMaterialtypeIDDisplayValue(label);
            runValidationTasks("materialtypeID", label);
          }}
          onClear={() => {
            setCurrentMaterialtypeIDDisplayValue("");
          }}
          defaultValue={materialtypeID}
          onChange={(e) => {
            let { value } = e.target;
            fetchMaterialtypeIDRecords(value);
            if (errors.materialtypeID?.hasError) {
              runValidationTasks("materialtypeID", value);
            }
            setCurrentMaterialtypeIDDisplayValue(value);
            setCurrentMaterialtypeIDValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("materialtypeID", currentMaterialtypeIDValue)
          }
          errorMessage={errors.materialtypeID?.errorMessage}
          hasError={errors.materialtypeID?.hasError}
          ref={materialtypeIDRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "materialtypeID")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Materials"
        placeholder=" "
        value={items}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              quantityAvailable,
              price,
              materialtypeID,
              items: value,
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
        {...getOverrideProps(overrides, "items")}
      ></SelectField>
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
          isDisabled={!(idProp || materialModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Delete"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || materialModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
