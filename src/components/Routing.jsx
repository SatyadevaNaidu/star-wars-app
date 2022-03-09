import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./search";
import Details from "./Details";

export default function Routing({ people }) {
  /* Naviagates to every character and used for searching among the characters */
  return (
    <Router>
      <Switch>
        <Route path="/people/:id">
          <Details people={people} />
        </Route>
        <Route path="/">
          <Search people={people} />
        </Route>
      </Switch>
    </Router>
  );
}
