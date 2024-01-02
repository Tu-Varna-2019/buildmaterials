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
export declare type MaterialTypeCreateFormInputValues = {
    name?: string;
    Materials?: any[];
};
export declare type MaterialTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Materials?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialTypeCreateFormOverridesProps = {
    MaterialTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Materials?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MaterialTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: MaterialTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MaterialTypeCreateFormInputValues) => MaterialTypeCreateFormInputValues;
    onSuccess?: (fields: MaterialTypeCreateFormInputValues) => void;
    onError?: (fields: MaterialTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MaterialTypeCreateFormInputValues) => MaterialTypeCreateFormInputValues;
    onValidate?: MaterialTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialTypeCreateForm(props: MaterialTypeCreateFormProps): React.ReactElement;
