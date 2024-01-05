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
export declare type MaterialSearchInputValues = {
    items?: string;
    name?: string;
    quantityAvailable?: number;
    price?: number;
    Sales?: any[];
    materialtypeID?: string;
};
export declare type MaterialSearchValidationValues = {
    items?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    quantityAvailable?: ValidationFunction<number>;
    price?: ValidationFunction<number>;
    Sales?: ValidationFunction<any>;
    materialtypeID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MaterialSearchOverridesProps = {
    MaterialSearchGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantityAvailable?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    Sales?: PrimitiveOverrideProps<AutocompleteProps>;
    materialtypeID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MaterialSearchProps = React.PropsWithChildren<{
    overrides?: MaterialSearchOverridesProps | undefined | null;
} & {
    id?: string;
    material?: any;
    onSubmit?: (fields: MaterialSearchInputValues) => MaterialSearchInputValues;
    onSuccess?: (fields: MaterialSearchInputValues) => void;
    onError?: (fields: MaterialSearchInputValues, errorMessage: string) => void;
    onChange?: (fields: MaterialSearchInputValues) => MaterialSearchInputValues;
    onValidate?: MaterialSearchValidationValues;
} & React.CSSProperties>;
export default function MaterialSearch(props: MaterialSearchProps): React.ReactElement;
