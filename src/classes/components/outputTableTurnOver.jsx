// import {
//   Button,
//   Divider,
//   Flex,
//   Input,
//   Label,
//   Radio,
//   RadioGroupField,
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableRow,
//   ThemeProvider,
//   View,
//   useTheme,
// } from "@aws-amplify/ui-react";
// import React from "react";
// import { HelpersContext } from "../../contexts/data_models/context";
// import { OutputTableComponent } from "./outputTableComponent";

// export function OutputTableTurnOver() {
//   const { UtilsObject } = React.useContext(HelpersContext);
//   const { tableResultTurnOver } = UtilsObject;

//   const { handleRadioTurnOverClick } = OutputTableComponent();

//   const [radioValue, setRadioValue] = React.useState("Day");
//   const [inputValue, setInputValue] = React.useState("");

//   const themeRadio = {
//     name: "radiogroup-theme",
//     tokens: {
//       components: {
//         radiogroup: {
//           radio: {
//             borderWidth: { value: "{borderWidths.small}" },
//             borderColor: { value: "{colors.white.60}" },
//             backgroundColor: { value: "{colors.white.20}" },
//             label: {
//               color: { value: "{colors.white.80}" },
//             },
//           },
//           legend: {
//             color: { value: "{colors.white.80}" },
//             fontWeight: { value: "{fontWeights.bold}" },
//           },
//         },
//       },
//     },
//   };

//   const { tokens } = useTheme();
//   return (
//     <View borderRadius={tokens.radii.large} fontSize={tokens.fontSizes.xl}>
//       <ThemeProvider theme={themeRadio} colorMode="light">
//         <RadioGroupField
//           legend="TurnOver"
//           name="themed"
//           onChange={(e) => setRadioValue(e.target.value)}
//           defaultValue="Day"
//         >
//           <Radio value="Day">Day</Radio>
//           <Radio value="Month">Month</Radio>
//           <Radio value="Last_3_months">Last 3 months</Radio>
//           <Radio value="Last_6_months">Last 6 months</Radio>
//           <Radio value="Year">Year</Radio>
//         </RadioGroupField>
//         <Divider />
//         <Flex direction="column" gap="medium">
//           <Label htmlFor="quantity" color={"white"}>
//             Enter date
//           </Label>
//           <Input
//             id="departing"
//             type="date"
//             onChange={(e) => setInputValue(e.currentTarget.value)}
//           />
//           <Button
//             ariaLabel="To the moon!"
//             loadingText=""
//             style={{
//               background: "#ADD8E6",
//             }}
//             onClick={() => handleRadioTurnOverClick(radioValue, inputValue)}
//             isDisabled={inputValue === ""}
//           >
//             Go 🚀
//           </Button>
//         </Flex>
//       </ThemeProvider>
//       {tableResultTurnOver}
//     </View>
//   );
// }

// export function OutputTurnOverTableHead({ turnOverPrice }) {
//   const theme = {
//     name: "table-theme",
//     tokens: {
//       components: {
//         table: {
//           row: {
//             hover: {
//               // Set hover background color to white
//               backgroundColor: { value: "{colors.white}" },
//             },

//             striped: {
//               // Set striped rows background color to white
//               backgroundColor: { value: "{colors.white}" },
//             },
//           },

//           header: {
//             // Set header text color to white
//             color: { value: "{colors.white}" },
//             fontSize: { value: "{fontSizes.xl}" },
//           },

//           data: {
//             // Set data text color to white and font weight
//             color: { value: "{colors.white}" },
//             fontWeight: { value: "{fontWeights.semibold}" },
//           },
//         },
//       },
//     },
//   };

//   return (
//     <ThemeProvider theme={theme} colorMode="light">
//       <Table highlightOnHover variation="striped">
//         <TableHead>
//           <TableRow>
//             <TableCell as="th">TurnOver</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           <TableRow>
//             <TableCell>{turnOverPrice}</TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </ThemeProvider>
//   );
// }
