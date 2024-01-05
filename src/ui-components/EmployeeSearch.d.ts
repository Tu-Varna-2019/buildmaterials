/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type EmployeeSearchInputValues = {
    items?: string;
    name?: string;
    phone?: string;
    Sales?: any[];
    positionID?: string;
    mallID?: string;
};
export declare type EmployeeSearchValidationValues = {
    items?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    Sales?: ValidationFunction<any>;
    positionID?: ValidationFunction<string>;
    mallID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EmployeeSearchOverridesProps = {
    EmployeeSearchGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    Sales?: PrimitiveOverrideProps<AutocompleteProps>;
    positionID?: PrimitiveOverrideProps<AutocompleteProps>;
    mallID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EmployeeSearchProps = React.PropsWithChildren<{
    overrides?: EmployeeSearchOverridesProps | undefined | null;
} & {
    id?: string;
    employee?: any;
    onSubmit?: (fields: EmployeeSearchInputValues) => EmployeeSearchInputValues;
    onSuccess?: (fields: EmployeeSearchInputValues) => void;
    onError?: (fields: EmployeeSearchInputValues, errorMessage: string) => void;
    onChange?: (fields: EmployeeSearchInputValues) => EmployeeSearchInputValues;
    onValidate?: EmployeeSearchValidationValues;
} & React.CSSProperties>;
export default function EmployeeSearch(props: EmployeeSearchProps): React.ReactElement;
