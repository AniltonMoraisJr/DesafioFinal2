import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
/* Pages */
import Login from "../pages/login";
import Admin from "../pages/admin";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/admin" component={Admin} />
      </BrowserRouter>
    );
  }
}
