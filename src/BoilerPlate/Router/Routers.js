import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Navbar from "./Component/Navbar";
import Person from "./Person";

const Routers = () => {
  return (
    <div>
      <Router>
        <Navbar />
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
          {/* this is the reason for param id */}
          <Route path="/:id" children={<Person />}></Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
