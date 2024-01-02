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
export declare type PositionCreateFormInputValues = {
    name?: string;
    Employees?: any[];
};
export declare type PositionCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PositionCreateFormOverridesProps = {
    PositionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PositionCreateFormProps = React.PropsWithChildren<{
    overrides?: PositionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PositionCreateFormInputValues) => PositionCreateFormInputValues;
    onSuccess?: (fields: PositionCreateFormInputValues) => void;
    onError?: (fields: PositionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PositionCreateFormInputValues) => PositionCreateFormInputValues;
    onValidate?: PositionCreateFormValidationValues;
} & React.CSSProperties>;
export default function PositionCreateForm(props: PositionCreateFormProps): React.ReactElement;
