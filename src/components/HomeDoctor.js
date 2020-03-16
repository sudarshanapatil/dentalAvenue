import React, { useState, Component } from "react";
import { Nav, Container, Row, Col, Tab } from "react-bootstrap";
import Navbar from "./Navbar";

import DoctorManagement from "./DoctorManagement";
import PatientManagement from "./PatientManagement";
import TreatmentManagement from "./TreatmentManagement";

import "../styles/HomeAdmin.css";

class HomeDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        
        {
          key: 1,
          tabName: "Manage Patient",
          component: <PatientManagement />
        },
        {
          key: 2,
          tabName: "Schedular Setting",
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
            <Col md={2}>
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
            <Col md={10}>
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
export default HomeDoctor;
