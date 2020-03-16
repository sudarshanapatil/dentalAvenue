import React, { useState, Component } from "react";
import { Nav, Button, Form, Container, Row, Col, Tab } from "react-bootstrap";
import Navbar from "./Navbar";
import Menubar from "./Menubar";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListDoctor from "./ListDoctor";
import ListTreatment from "./ListTreatment";
import ListPatient from "./ListPatient";
import newpatient from "./NewPatient";
import DeletePatient from "./DeletePatient";
import NewDocor from "./NewDoctor";
import NewTreatement from "./NewTreatment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewPatient from "./NewPatient";

import DoctorManagement from "./DoctorManagement";
import PatientManagement from "./PatientManagement";
import TreatmentManagement from "./TreatmentManagement";

import "../styles/HomeAdmin.css";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMenuItem: <ListDoctor />,
      optionName: "Doctor",
      title: "Doctors Management",
      menuItems: [
        {
          key: 1,
          tabName: "Manage Doctors",
          component: <DoctorManagement />
        },
        {
          key: 2,
          tabName: "Manage Patient",
          component: <PatientManagement />
        },
        {
          key: 3,
          tabName: "Manage Treatment",
          component: <TreatmentManagement />
        }
      ]
    };
  }

  setAddEditDelete = choise => {
    console.log("current choise", choise, this.state.optionName);
    let CustomTag;
    if (choise == "Add") {
      CustomTag = `New${this.state.optionName}`;
      console.log(CustomTag, "tag");
    }

    switch (choise) {
      case "Add":
        if (this.state.optionName == "Doctor") choise = <NewDocor />;
        else if (this.state.optionName == "Patient") choise = <NewPatient />;
        else choise = <NewTreatement />;

        break;
      case "Edit":
        if (this.state.optionName == "Doctor") choise = <NewDocor />;
        else if (this.state.optionName == "Patient") choise = <NewPatient />;
        else choise = <NewTreatement />;
        break;
      case "Delete":
        if (this.state.optionName == "Doctor") choise = <DeletePatient />;
        else if (this.state.optionName == "Patient") choise = <DeletePatient />;
        else choise = <DeletePatient />;
        break;
    }
    this.setState({
      currentMenuItem: choise
    });
  };

  setMenuItem = menuItem => {
    console.log(menuItem, "curent item");
    let optionName = menuItem;
    let title;
    if (menuItem == "Doctor") {
      menuItem = <ListDoctor />;
      title = "Doctors Management";
    } else if (menuItem == "Patient") {
      menuItem = <ListPatient />;
      title = "Patients Management";
    } else {
      menuItem = <ListTreatment />;
      title = "Treaments Management";
    }
    this.setState({
      currentMenuItem: menuItem,
      optionName,
      title
    });
  };

  render() {
    return (
      <Container fluid className="containerHomeAdmin no-padding no-margin">
        <Navbar />
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
          <Row noGutters className="no-padding">
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                {this.state.menuItems.map((item, i) => (
                  <Nav.Item key={`nav_item_${i}`}>
                    <Nav.Link eventKey={item.key} className="nav-link">
                      {item.tabName}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                {this.state.menuItems.map((item, i) => (
                  <Tab.Pane key={`tab_pane_${i}`} eventKey={item.key}>
                    {item.component}
                  </Tab.Pane>
                ))}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
        {/* <Row noGutters>
          <Col xs={3}>
          </Col>
          <Col xs={9}>
            <Row>{this.state.title}</Row>
            <Row className="">
              <AddEditDeleteMenu
                setAddEditDelete={choise => this.setAddEditDelete(choise)}
              />
            </Row>
            <Row>{this.state.currentMenuItem}</Row>
          </Col>
        </Row> */}
      </Container>
    );
  }
}
export default HomeAdmin;
