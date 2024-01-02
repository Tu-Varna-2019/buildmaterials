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
export declare type MallUpdateFormInputValues = {
    name?: string;
    Employees?: any[];
};
export declare type MallUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MallUpdateFormOverridesProps = {
    MallUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MallUpdateFormProps = React.PropsWithChildren<{
    overrides?: MallUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    mall?: any;
    onSubmit?: (fields: MallUpdateFormInputValues) => MallUpdateFormInputValues;
    onSuccess?: (fields: MallUpdateFormInputValues) => void;
    onError?: (fields: MallUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MallUpdateFormInputValues) => MallUpdateFormInputValues;
    onValidate?: MallUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MallUpdateForm(props: MallUpdateFormProps): React.ReactElement;
