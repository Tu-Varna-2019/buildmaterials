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
export declare type SalesUpdateFormInputValues = {
    quantitySold?: number;
    salesDate?: string;
    totalPrice?: number;
    employeeID?: string;
    customerID?: string;
    materialID?: string;
};
export declare type SalesUpdateFormValidationValues = {
    quantitySold?: ValidationFunction<number>;
    salesDate?: ValidationFunction<string>;
    totalPrice?: ValidationFunction<number>;
    employeeID?: ValidationFunction<string>;
    customerID?: ValidationFunction<string>;
    materialID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SalesUpdateFormOverridesProps = {
    SalesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    quantitySold?: PrimitiveOverrideProps<TextFieldProps>;
    salesDate?: PrimitiveOverrideProps<TextFieldProps>;
    totalPrice?: PrimitiveOverrideProps<TextFieldProps>;
    employeeID?: PrimitiveOverrideProps<AutocompleteProps>;
    customerID?: PrimitiveOverrideProps<AutocompleteProps>;
    materialID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type SalesUpdateFormProps = React.PropsWithChildren<{
    overrides?: SalesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sales?: any;
    onSubmit?: (fields: SalesUpdateFormInputValues) => SalesUpdateFormInputValues;
    onSuccess?: (fields: SalesUpdateFormInputValues) => void;
    onError?: (fields: SalesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SalesUpdateFormInputValues) => SalesUpdateFormInputValues;
    onValidate?: SalesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SalesUpdateForm(props: SalesUpdateFormProps): React.ReactElement;
