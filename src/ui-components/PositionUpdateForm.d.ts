/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PositionUpdateFormInputValues = {
    name?: string;
    Employees?: any[];
    items?: string;
};
export declare type PositionUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
    items?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PositionUpdateFormOverridesProps = {
    PositionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
    items?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type PositionUpdateFormProps = React.PropsWithChildren<{
    overrides?: PositionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    position?: any;
    onSubmit?: (fields: PositionUpdateFormInputValues) => PositionUpdateFormInputValues;
    onSuccess?: (fields: PositionUpdateFormInputValues) => void;
    onError?: (fields: PositionUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PositionUpdateFormInputValues) => PositionUpdateFormInputValues;
    onValidate?: PositionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PositionUpdateForm(props: PositionUpdateFormProps): React.ReactElement;
