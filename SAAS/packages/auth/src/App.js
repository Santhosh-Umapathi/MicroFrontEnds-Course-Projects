import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Signin from "./components/Signin";
import Signup from "./components/Signup";

// FIX: This is a fix for the class name collision issue
const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

// Using the memory history object to navigate between pages for MFE apps except for the container app
export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signin">
              <Signin onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
