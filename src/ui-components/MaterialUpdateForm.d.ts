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
export declare type MaterialUpdateFormInputValues = {
    name?: string;
    quantityAvailable?: number;
    price?: number;
    materialtypeID?: string;
    items?: string;
};
export declare type MaterialUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantityAvailable?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    materialtypeID?: ValidationFunction<string>;
    items?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialUpdateFormOverridesProps = {
    MaterialUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantityAvailable?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    materialtypeID?: PrimitiveOverrideProps<AutocompleteProps>;
    items?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type MaterialUpdateFormProps = React.PropsWithChildren<{
    overrides?: MaterialUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    material?: any;
    onSubmit?: (fields: MaterialUpdateFormInputValues) => MaterialUpdateFormInputValues;
    onSuccess?: (fields: MaterialUpdateFormInputValues) => void;
    onError?: (fields: MaterialUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: MaterialUpdateFormInputValues) => MaterialUpdateFormInputValues;
    onValidate?: MaterialUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MaterialUpdateForm(props: MaterialUpdateFormProps): React.ReactElement;
