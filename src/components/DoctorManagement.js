import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import ListDoctor from "./ListDoctor";
import AddEditDeleteMenu from "./AddEditDeleteMenu";

import "../styles/DoctorManagement.css";

class DoctorManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <span className="body-title">Doctor Management</span>
        </Row>
        {/* <Row noGutters>
          <Button variant="primary" className="body-button">
            Add
          </Button>
          <Button variant="success" className="body-button">
            Edit
          </Button>
          <Button variant="danger" className="body-button">
            Delete
          </Button>
        </Row> */}
        <AddEditDeleteMenu type={"Doctor"} />
        <Row noGutters>
          <ListDoctor />
        </Row>
      </Container>
    );
  }
}

export default DoctorManagement;
