import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import {
  Authenticator,
  SelectField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { listMalls, listPositions } from "./graphql/queries";
import HomeLayout from "./pages/layouts/home_layout";
import { ComponentStateProvider } from "./providers/component_provider/provider";
import { DataModelProvider } from "./providers/data_models/provider";
import { HelpersProvider } from "./providers/helpers_provider/provider";

export default function App() {
  const [positionIDNames, setPositionIDNames] = useState({});
  const [mallIDNames, setMallIDNames] = useState({});

  // Fetch position attributes
  useEffect(() => {
    async function fetchData() {
      try {
        const client = generateClient();
        // List all items
        const response = await client.graphql({
          query: listPositions,
        });
        const responseMall = await client.graphql({
          query: listMalls,
        });

        response.data.listPositions.items.forEach((position) => {
          setPositionIDNames((prevState) => ({
            ...prevState,
            [position.id]: position.name,
          }));
        });

        responseMall.data.listMalls.items.forEach((mall) => {
          setMallIDNames((prevState) => ({
            ...prevState,
            [mall.id]: mall.name,
          }));
        });
      } catch (error) {
        console.error("Error in fetching/creating client:", error);
      }
    }
    fetchData();
  }, []);

  const signUpFields = {
    signUp: {
      name: {
        placeholder: "Enter your name",
        isRequired: true,
        label: "Name",
        order: 4,
      },
      phone_number: {
        placeholder: "Enter your Phone Number",
        isRequired: true,
        label: "Phone",
        order: 4,
      },
    },
  };

  return (
    <Authenticator
      initialState="signUp"
      formFields={signUpFields}
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              <>
                <SelectField
                  name="custom:custom:molAssigned"
                  label="Mol assigned"
                  options={Object.values(mallIDNames)}
                  errorMessage={validationErrors["custom:custom:molAssigned"]}
                />

                <SelectField
                  name="custom:custom:position"
                  label="Position"
                  options={Object.values(positionIDNames)}
                  errorMessage={validationErrors["custom:custom:position"]}
                />
                <Authenticator.SignUp.FormFields />
              </>
            );
          },
        },
      }}
    >
      <BrowserRouter>
        <HelpersProvider>
          <DataModelProvider>
            <ComponentStateProvider>
              <Routes>
                <Route path="/" element={<HomeLayout />} />
              </Routes>
            </ComponentStateProvider>
          </DataModelProvider>
        </HelpersProvider>
      </BrowserRouter>
    </Authenticator>
  );
}
