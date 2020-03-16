import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListPatient from "./ListPatient";

import "../styles/DoctorManagement.css";

class PatientManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <span className="body-title">Patient Management</span>
        </Row>
        <AddEditDeleteMenu type={"Patient"} />
        <Row noGutters>
          <ListPatient />
        </Row>
      </Container>
    );
  }
}

export default PatientManagement;
