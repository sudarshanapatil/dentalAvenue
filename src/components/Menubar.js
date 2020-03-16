import React, { Component } from "react";
import "../styles/Menubar.css";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  TabContainer,
  TabContent,
  TabPane,
  Tab,
  Nav,
  Sonnet
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Menubar = props => {
  return (
    // <Container fluid>
    //   <Row
    //     className="navRow"
    //     onClick={() => {
    //       console.log(props);
    //       props.setMenuItem("Doctor");
    //     }}
    //   >
    //     Manage Doctors
    //   </Row>
    //   <Row className="navRow" onClick={() => props.setMenuItem("Patient")}>
    //     Manage Patients
    //   </Row>
    //   <Row className="navRow" onClick={() => props.setMenuItem("Treatment")}>
    //     Manage Treatments
    //   </Row>
    // </Container>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div>hi</div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div>hello</div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Menubar;
