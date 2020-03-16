import React, { useState, Component } from "react";
import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import Navbar from "./Navbar";

import DoctorManagement from "./DoctorManagement";
import PatientManagement from "./PatientManagement";
import TreatmentManagement from "./TreatmentManagement";

import "../styles/HomeAdmin.css";

class HomeAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      </Container>
    );
  }
}
export default HomeAdmin;
