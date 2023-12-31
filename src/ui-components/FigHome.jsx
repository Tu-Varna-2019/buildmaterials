/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Divider,
  Flex,
  Image,
  Rating,
  SelectField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function FigHome(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "FigHome")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="1920px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.10000000149011612)"
        padding="24px 0px 24px 32px"
        backgroundColor="rgba(33,45,80,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      >
        <View
          width="1252px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 321")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create"
            {...getOverrideProps(overrides, "Create")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="151px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Update"
            {...getOverrideProps(overrides, "Update")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="307px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Query"
            {...getOverrideProps(overrides, "Query")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="453px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Report"
            {...getOverrideProps(overrides, "Report")}
          ></Text>
        </View>
        <Flex
          width="146px"
          height="39px"
          {...getOverrideProps(overrides, "button_logout")}
        ></Flex>
        <Text
          fontFamily="Itim"
          fontSize="24px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="190px"
          height="48px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="John doe"
          {...getOverrideProps(overrides, "text_name")}
        ></Text>
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/man.png"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
      <Image
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33px"
        left="514px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/report-uis.png"
        {...getOverrideProps(overrides, "img_report")}
      ></Image>
      <Image
        width="36px"
        height="34px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29px"
        left="365px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/query-uis.png"
        {...getOverrideProps(overrides, "img_query")}
      ></Image>
      <Image
        width="30px"
        height="29px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33px"
        left="215px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/build-uis.png"
        {...getOverrideProps(overrides, "img_build")}
      ></Image>
      <Image
        width="30px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33px"
        left="74px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/create-uis.png"
        {...getOverrideProps(overrides, "img_create")}
      ></Image>
      <SelectField
        width="136px"
        height="40px"
        position="absolute"
        top="30px"
        left="520px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_report")}
      ></SelectField>
      <SelectField
        width="136px"
        height="40px"
        position="absolute"
        top="30px"
        left="365px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_query")}
      ></SelectField>
      <SelectField
        width="136px"
        height="40px"
        position="absolute"
        top="30px"
        left="215px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_update")}
      ></SelectField>
      <Image
        width="54px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="26px"
        left="7px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/main-logo-uis.png"
        {...getOverrideProps(overrides, "img_main_logo38644439")}
      ></Image>
      <SelectField
        width="136px"
        height="unset"
        position="absolute"
        top="30px"
        left="70px"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "select_field_create")}
      ></SelectField>
      <View
        width="1920px"
        height="81px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="96px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Rectangle 1")}
      ></View>
      <Text
        fontFamily="Impact"
        fontSize="40px"
        fontWeight="400"
        color="rgba(33,45,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="802px"
        left="calc(50% - 342.5px - 1.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Information system for building materials"
        {...getOverrideProps(overrides, "text_welcome_text")}
      ></Text>
      <Image
        width="612px"
        height="500px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="256px"
        left="calc(50% - 306px - 17px)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/main_uis.jpg"
        {...getOverrideProps(overrides, "img_welcome")}
      ></Image>
      <Text
        fontFamily="Impact"
        fontSize="40px"
        fontWeight="400"
        color="rgba(33,45,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="129px"
        left="calc(50% - 47.5px - -19.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home&#xA;"
        {...getOverrideProps(overrides, "text_page")}
      ></Text>
      <View
        width="1920px"
        height="176px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="904px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(33,45,80,1)"
        {...getOverrideProps(overrides, "Rectangle 2")}
      ></View>
      <Divider
        width="1919px"
        height="6px"
        position="absolute"
        top="910px"
        left="0px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        size="large"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider38644515")}
      ></Divider>
      <Text
        fontFamily="Imprint MT Shadow"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="186px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="937px"
        left="108px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="BrickBond"
        {...getOverrideProps(overrides, "BrickBond")}
      ></Text>
      <Image
        width="70px"
        height="57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="926px"
        left="38px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/main-logo-uis.png"
        {...getOverrideProps(overrides, "img_main_logo38654519")}
      ></Image>
      <Image
        width="44px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1013px"
        left="38px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/twitter_uis.png"
        {...getOverrideProps(overrides, "img_twitter")}
      ></Image>
      <Image
        width="43px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1013px"
        left="108px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/youtube_uis.png"
        {...getOverrideProps(overrides, "img_youtube")}
      ></Image>
      <Image
        width="43px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1013px"
        left="177px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/instagram_uis.png"
        {...getOverrideProps(overrides, "img_instagram")}
      ></Image>
      <Image
        width="44px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1013px"
        left="246px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://tuv-hotel-public-hosting.s3.eu-west-1.amazonaws.com/vimeo.png"
        {...getOverrideProps(overrides, "img_vimeo")}
      ></Image>
      <Text
        fontFamily="Inder"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="969px"
        left="calc(50% - 285.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© 2023 BrickBond Ltd. Registered in Bulgaria No. BE011035. &#xA;All rights reserved. Privacy Statement Sitemap"
        {...getOverrideProps(
          overrides,
          "\u00A9 2023 BrickBond Ltd. Registered in Bulgaria No. BE011035. All rights reserved. Privacy Statement Sitemap"
        )}
      ></Text>
      <Rating
        width="unset"
        height="unset"
        position="absolute"
        top="988px"
        left="1652px"
        size="large"
        {...getOverrideProps(overrides, "Rating")}
      ></Rating>
      <Text
        fontFamily="JejuGothic"
        fontSize="32px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="945px"
        left="calc(50% - 61px - -798px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Rate us!"
        {...getOverrideProps(overrides, "Rate us!")}
      ></Text>
      <Divider
        width="263px"
        height="1px"
        position="absolute"
        top="997px"
        left="27px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider38654552")}
      ></Divider>
    </View>
  );
}
