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
export declare type MallCreateFormInputValues = {
    name?: string;
    Employees?: any[];
};
export declare type MallCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MallCreateFormOverridesProps = {
    MallCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MallCreateFormProps = React.PropsWithChildren<{
    overrides?: MallCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MallCreateFormInputValues) => MallCreateFormInputValues;
    onSuccess?: (fields: MallCreateFormInputValues) => void;
    onError?: (fields: MallCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MallCreateFormInputValues) => MallCreateFormInputValues;
    onValidate?: MallCreateFormValidationValues;
} & React.CSSProperties>;
export default function MallCreateForm(props: MallCreateFormProps): React.ReactElement;
