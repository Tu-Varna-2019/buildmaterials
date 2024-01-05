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
export declare type MallSearchInputValues = {
    items?: string;
    name?: string;
    Employees?: any[];
};
export declare type MallSearchValidationValues = {
    items?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MallSearchOverridesProps = {
    MallSearchGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MallSearchProps = React.PropsWithChildren<{
    overrides?: MallSearchOverridesProps | undefined | null;
} & {
    id?: string;
    mall?: any;
    onSubmit?: (fields: MallSearchInputValues) => MallSearchInputValues;
    onSuccess?: (fields: MallSearchInputValues) => void;
    onError?: (fields: MallSearchInputValues, errorMessage: string) => void;
    onChange?: (fields: MallSearchInputValues) => MallSearchInputValues;
    onValidate?: MallSearchValidationValues;
} & React.CSSProperties>;
export default function MallSearch(props: MallSearchProps): React.ReactElement;
