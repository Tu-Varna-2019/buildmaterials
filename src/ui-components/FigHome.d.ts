/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, FlexProps, ImageProps, RatingProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FigHomeOverridesProps = {
    FigHome?: PrimitiveOverrideProps<ViewProps>;
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 321"?: PrimitiveOverrideProps<ViewProps>;
    Create?: PrimitiveOverrideProps<TextProps>;
    Update?: PrimitiveOverrideProps<TextProps>;
    Query?: PrimitiveOverrideProps<TextProps>;
    Report?: PrimitiveOverrideProps<TextProps>;
    button_logout?: PrimitiveOverrideProps<FlexProps>;
    text_name?: PrimitiveOverrideProps<TextProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    img_report?: PrimitiveOverrideProps<ImageProps>;
    img_query?: PrimitiveOverrideProps<ImageProps>;
    img_build?: PrimitiveOverrideProps<ImageProps>;
    img_create?: PrimitiveOverrideProps<ImageProps>;
    select_field_report?: PrimitiveOverrideProps<SelectFieldProps>;
    select_field_query?: PrimitiveOverrideProps<SelectFieldProps>;
    select_field_update?: PrimitiveOverrideProps<SelectFieldProps>;
    img_main_logo38644439?: PrimitiveOverrideProps<ImageProps>;
    select_field_create?: PrimitiveOverrideProps<SelectFieldProps>;
    "Rectangle 1"?: PrimitiveOverrideProps<ViewProps>;
    text_welcome_text?: PrimitiveOverrideProps<TextProps>;
    img_welcome?: PrimitiveOverrideProps<ImageProps>;
    text_page?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ViewProps>;
    Divider38644515?: PrimitiveOverrideProps<DividerProps>;
    BrickBond?: PrimitiveOverrideProps<TextProps>;
    img_main_logo38654519?: PrimitiveOverrideProps<ImageProps>;
    img_twitter?: PrimitiveOverrideProps<ImageProps>;
    img_youtube?: PrimitiveOverrideProps<ImageProps>;
    img_instagram?: PrimitiveOverrideProps<ImageProps>;
    img_vimeo?: PrimitiveOverrideProps<ImageProps>;
    "\u00A9 2023 BrickBond Ltd. Registered in Bulgaria No. BE011035. All rights reserved. Privacy Statement Sitemap"?: PrimitiveOverrideProps<TextProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    "Rate us!"?: PrimitiveOverrideProps<TextProps>;
    Divider38654552?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type FigHomeProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FigHomeOverridesProps | undefined | null;
}>;
export default function FigHome(props: FigHomeProps): React.ReactElement;
