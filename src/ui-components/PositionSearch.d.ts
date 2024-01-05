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
export declare type PositionSearchInputValues = {
    items?: string;
    name?: string;
    Employees?: any[];
};
export declare type PositionSearchValidationValues = {
    items?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    Employees?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PositionSearchOverridesProps = {
    PositionSearchGrid?: PrimitiveOverrideProps<GridProps>;
    items?: PrimitiveOverrideProps<AutocompleteProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    Employees?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PositionSearchProps = React.PropsWithChildren<{
    overrides?: PositionSearchOverridesProps | undefined | null;
} & {
    id?: string;
    position?: any;
    onSubmit?: (fields: PositionSearchInputValues) => PositionSearchInputValues;
    onSuccess?: (fields: PositionSearchInputValues) => void;
    onError?: (fields: PositionSearchInputValues, errorMessage: string) => void;
    onChange?: (fields: PositionSearchInputValues) => PositionSearchInputValues;
    onValidate?: PositionSearchValidationValues;
} & React.CSSProperties>;
export default function PositionSearch(props: PositionSearchProps): React.ReactElement;
