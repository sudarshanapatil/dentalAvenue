import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewPatient from "./components/NewPatient";
import OldPatient from "./components/OldPatient";
import Login from "./components/Login";
import HomeAdmin from "./components/HomeAdmin";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ListPatientsTreatment from "./components/ListPatientsTreatment";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/NewPatient">
          <NewPatient />
        </Route>
        <Route path="/ExistingPatient">
          <OldPatient />
        </Route>
        <Route exact path="/HomeAdmin">
          <HomeAdmin />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/ListPatientsTreatment">
          <ListPatientsTreatment />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
