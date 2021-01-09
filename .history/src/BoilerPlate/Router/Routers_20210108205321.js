import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Contact from "./Component/Contact ";
import Error from "./Component/Error";

const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
