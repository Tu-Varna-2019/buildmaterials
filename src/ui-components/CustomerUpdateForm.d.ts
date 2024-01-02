/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CustomerUpdateFormInputValues = {
    name?: string;
    phone?: string;
    invoiceStatus?: boolean;
    bulstat?: string;
    Sales?: any[];
    companyID?: string;
};
export declare type CustomerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    invoiceStatus?: ValidationFunction<boolean>;
    bulstat?: ValidationFunction<string>;
    Sales?: ValidationFunction<any>;
    companyID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerUpdateFormOverridesProps = {
    CustomerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    invoiceStatus?: PrimitiveOverrideProps<SwitchFieldProps>;
    bulstat?: PrimitiveOverrideProps<TextFieldProps>;
    Sales?: PrimitiveOverrideProps<AutocompleteProps>;
    companyID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type CustomerUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customer?: any;
    onSubmit?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onSuccess?: (fields: CustomerUpdateFormInputValues) => void;
    onError?: (fields: CustomerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onValidate?: CustomerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerUpdateForm(props: CustomerUpdateFormProps): React.ReactElement;
