/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CustomerSearchInputValues = {
    items?: string;
    name?: string;
    phone?: string;
    invoiceStatus?: boolean;
    bulstat?: string;
    Sales?: any[];
    companyID?: string;
};
export declare type CustomerSearchValidationValues = {
    items?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    invoiceStatus?: ValidationFunction<boolean>;
    bulstat?: ValidationFunction<string>;
    Sales?: ValidationFunction<any>;
    companyID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerSearchOverridesProps = {
    CustomerSearchGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    invoiceStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
    bulstat?: PrimitiveOverrideProps<TextFieldProps>;
    Sales?: PrimitiveOverrideProps<AutocompleteProps>;
    companyID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CustomerSearchProps = React.PropsWithChildren<{
    overrides?: CustomerSearchOverridesProps | undefined | null;
} & {
    id?: string;
    customer?: any;
    onSubmit?: (fields: CustomerSearchInputValues) => CustomerSearchInputValues;
    onSuccess?: (fields: CustomerSearchInputValues) => void;
    onError?: (fields: CustomerSearchInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerSearchInputValues) => CustomerSearchInputValues;
    onValidate?: CustomerSearchValidationValues;
} & React.CSSProperties>;
export default function CustomerSearch(props: CustomerSearchProps): React.ReactElement;
