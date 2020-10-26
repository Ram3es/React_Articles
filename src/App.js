import React from "react";
import { Switch } from "react-router";
import { Main } from "./containers/Main/containers";
import { privateRouter, publicRouter } from "./router";
import routeAssessor from "./router/routeAssessor";

export default () => (
  <Switch>
    {publicRouter.map((route) => routeAssessor(null, route))}
    <Main>{privateRouter().map((route) => routeAssessor(null, route))}</Main>
  </Switch>
);
