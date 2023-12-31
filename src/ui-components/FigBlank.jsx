/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, View } from "@aws-amplify/ui-react";
export default function FigBlank(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="723px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FigBlank")}
      {...rest}
    >
      <Button
        width="349px"
        height="77px"
        position="absolute"
        top="591px"
        left="calc(50% - 173.5px - 1.5px)"
        backgroundColor="rgba(33,45,80,1)"
        size="default"
        isDisabled={false}
        variation="default"
        children="Exit"
        {...getOverrideProps(overrides, "button_exit")}
      ></Button>
    </View>
  );
}
