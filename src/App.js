import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewPatient from "./components/NewPatient";
import OldPatient from "./components/OldPatient";
import Login from "./components/Login";
import HomeAdmin from "./components/HomeAdmin";
import ListTreatment from "./components/ListTreatment";
import AddDoctor from "./components/AddDoctor";
import AddPatient from "./components/AddPatient";
import AddTreatment from "./components/AddTreatment";
import ListPatient from "./components/ListPatient";
import Navbar from "./components/Navbar";
import Menubar from "./components/Menubar";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      {/* <Link to='/'>Home</Link> */}
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
        <Route path="/ListPatient">
          <ListPatient />
        </Route>
        <Route path="/Navbar">
          <Navbar />
        </Route>
        <Route path="/Menubar">
          <Menubar />
        </Route>
        <Route path="/ExistingPatient">
          <OldPatient />
        </Route>
        <Route path="/HomeAdmin">
          <HomeAdmin />
        </Route>
        <Route path="/ListTreatment">
          <ListTreatment />
        </Route>
        <Route exact path="/AddDoctor">
          <AddDoctor />
        </Route>
        <Route path="/AddPatient">
          <AddPatient />
        </Route>
        <Route path="/AddTreatment">
          <AddTreatment />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
