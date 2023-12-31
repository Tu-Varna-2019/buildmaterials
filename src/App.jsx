import "@aws-amplify/ui-react/styles.css";
import "./App.css";

import {
  Authenticator,
  SelectField,
  TextField,
  useAuthenticator,
} from "@aws-amplify/ui-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/layouts/home_layout";
import { ComponentStateProvider } from "./providers/component_provider/provider";
import { DataModelProvider } from "./providers/data_models/provider";
import { HelpersProvider } from "./providers/helpers_provider/provider";

const options = ["Position 1", "Position 2", "Position 3"];

const signUpFields = {
  signUp: {
    "custom:molAssigned": {
      placeHolder: "Enter your Mol",
      isRequired: true,
      label: "Mol assigned",
      order: 4,
    },
    "custom:position": {
      placeHolder: "Enter your Position",
      isRequired: true,
      label: "Position",
      order: 4,
      options: options,
    },
  },
};

export default function App() {
  return (
    // <Authenticator formFields={signUpFields}>
    <Authenticator
      initialState="signUp"
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              <>
                <TextField
                  label="Name"
                  placeholder="Enter your name"
                  errorMessage="Name must not be empty"
                />
                <TextField
                  label="Mol assigned"
                  placeholder="Enter your Mol"
                  errorMessage="Mol must not be empty"
                />

                <SelectField
                  label="Position"
                  options={["lions", "tigers", "bears"]}
                />
                <Authenticator.SignUp.FormFields />
              </>
            );
          },
        },
      }}
      services={{
        async validateCustomSignUp(formData) {
          if (!formData.acknowledgement) {
            return {
              acknowledgement: "You must agree to the Terms & Conditions",
            };
          }
        },
      }}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
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

//export default withAuthenticator(App, components.Authenticator);
