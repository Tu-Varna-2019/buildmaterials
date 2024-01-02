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
import { getMaterialType, listMaterials } from "../graphql/queries";
import { updateMaterial, updateMaterialType } from "../graphql/mutations";
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
export default function MaterialTypeUpdateForm(props) {
  const {
    id: idProp,
    materialType: materialTypeModelProp,
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
    Materials: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [Materials, setMaterials] = React.useState(initialValues.Materials);
  const [MaterialsLoading, setMaterialsLoading] = React.useState(false);
  const [materialsRecords, setMaterialsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = materialTypeRecord
      ? { ...initialValues, ...materialTypeRecord, Materials: linkedMaterials }
      : initialValues;
    setName(cleanValues.name);
    setMaterials(cleanValues.Materials ?? []);
    setCurrentMaterialsValue(undefined);
    setCurrentMaterialsDisplayValue("");
    setErrors({});
  };
  const [materialTypeRecord, setMaterialTypeRecord] = React.useState(
    materialTypeModelProp
  );
  const [linkedMaterials, setLinkedMaterials] = React.useState([]);
  const canUnlinkMaterials = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getMaterialType.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMaterialType
        : materialTypeModelProp;
      const linkedMaterials = record?.Materials?.items ?? [];
      setLinkedMaterials(linkedMaterials);
      setMaterialTypeRecord(record);
    };
    queryData();
  }, [idProp, materialTypeModelProp]);
  React.useEffect(resetStateValues, [materialTypeRecord, linkedMaterials]);
  const [currentMaterialsDisplayValue, setCurrentMaterialsDisplayValue] =
    React.useState("");
  const [currentMaterialsValue, setCurrentMaterialsValue] =
    React.useState(undefined);
  const MaterialsRef = React.createRef();
  const getIDValue = {
    Materials: (r) => JSON.stringify({ id: r?.id }),
  };
  const MaterialsIdSet = new Set(
    Array.isArray(Materials)
      ? Materials.map((r) => getIDValue.Materials?.(r))
      : getIDValue.Materials?.(Materials)
  );
  const getDisplayValue = {
    Materials: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    Materials: [],
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
  const fetchMaterialsRecords = async (value) => {
    setMaterialsLoading(true);
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
      var loaded = result.filter(
        (item) => !MaterialsIdSet.has(getIDValue.Materials?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMaterialsRecords(newOptions.slice(0, autocompleteLength));
    setMaterialsLoading(false);
  };
  React.useEffect(() => {
    fetchMaterialsRecords("");
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
          Materials: Materials ?? null,
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
          const materialsToLink = [];
          const materialsToUnLink = [];
          const materialsSet = new Set();
          const linkedMaterialsSet = new Set();
          Materials.forEach((r) => materialsSet.add(getIDValue.Materials?.(r)));
          linkedMaterials.forEach((r) =>
            linkedMaterialsSet.add(getIDValue.Materials?.(r))
          );
          linkedMaterials.forEach((r) => {
            if (!materialsSet.has(getIDValue.Materials?.(r))) {
              materialsToUnLink.push(r);
            }
          });
          Materials.forEach((r) => {
            if (!linkedMaterialsSet.has(getIDValue.Materials?.(r))) {
              materialsToLink.push(r);
            }
          });
          materialsToUnLink.forEach((original) => {
            if (!canUnlinkMaterials) {
              throw Error(
                `Material ${original.id} cannot be unlinked from MaterialType because materialtypeID is a required field.`
              );
            }
            promises.push(
              client.graphql({
                query: updateMaterial.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    materialtypeID: null,
                  },
                },
              })
            );
          });
          materialsToLink.forEach((original) => {
            promises.push(
              client.graphql({
                query: updateMaterial.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    materialtypeID: materialTypeRecord.id,
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
              query: updateMaterialType.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: materialTypeRecord.id,
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
      {...getOverrideProps(overrides, "MaterialTypeUpdateForm")}
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
              Materials,
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
              name,
              Materials: values,
            };
            const result = onChange(modelFields);
            values = result?.Materials ?? values;
          }
          setMaterials(values);
          setCurrentMaterialsValue(undefined);
          setCurrentMaterialsDisplayValue("");
        }}
        currentFieldValue={currentMaterialsValue}
        label={"Materials"}
        items={Materials}
        hasError={errors?.Materials?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("Materials", currentMaterialsValue)
        }
        errorMessage={errors?.Materials?.errorMessage}
        getBadgeText={getDisplayValue.Materials}
        setFieldValue={(model) => {
          setCurrentMaterialsDisplayValue(
            model ? getDisplayValue.Materials(model) : ""
          );
          setCurrentMaterialsValue(model);
        }}
        inputFieldRef={MaterialsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Materials"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Material"
          value={currentMaterialsDisplayValue}
          options={materialsRecords
            .filter((r) => !MaterialsIdSet.has(getIDValue.Materials?.(r)))
            .map((r) => ({
              id: getIDValue.Materials?.(r),
              label: getDisplayValue.Materials?.(r),
            }))}
          isLoading={MaterialsLoading}
          onSelect={({ id, label }) => {
            setCurrentMaterialsValue(
              materialsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMaterialsDisplayValue(label);
            runValidationTasks("Materials", label);
          }}
          onClear={() => {
            setCurrentMaterialsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchMaterialsRecords(value);
            if (errors.Materials?.hasError) {
              runValidationTasks("Materials", value);
            }
            setCurrentMaterialsDisplayValue(value);
            setCurrentMaterialsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("Materials", currentMaterialsDisplayValue)
          }
          errorMessage={errors.Materials?.errorMessage}
          hasError={errors.Materials?.hasError}
          ref={MaterialsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "Materials")}
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
          isDisabled={!(idProp || materialTypeModelProp)}
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
              !(idProp || materialTypeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
