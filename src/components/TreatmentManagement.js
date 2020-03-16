import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListTreatment from "./ListTreatment";

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
          <span className="body-title">Treatment Management</span>
        </Row>
        <AddEditDeleteMenu type={"Treatment"} />
        <Row noGutters>
          <ListTreatment />
        </Row>
      </Container>
    );
  }
}

export default PatientManagement;
