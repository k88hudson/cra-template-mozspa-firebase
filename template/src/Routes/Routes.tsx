import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { TopNav, TopNavLink } from "../TopNav/TopNav";
import { Home } from "../Home/Home";
import { About } from "../About/About";
import { Container } from "react-bootstrap";

export function Routes() {
  return (
    <Router>
      <TopNav>
        <TopNavLink exact to="/">
          Home
        </TopNavLink>
        <TopNavLink exact to="/about">
          About
        </TopNavLink>
      </TopNav>
      <Container className="pt-4">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}
