import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import Main from "./components/Main";

export default props => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </HashRouter>
);
