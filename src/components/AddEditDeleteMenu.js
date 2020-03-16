import { Button, ButtonToolbar, ButtonGroup, Col, Row } from "react-bootstrap";
import React, { useState, Component } from "react";
import { Redirect } from "react-router-dom";
import "../styles/AddEditDeleteMenu.css";

class AddEditDeleteMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setAddEditDelete = choice => {
    switch (choice) {
      case "Add": {
        switch (this.props.type) {
          case "Doctor": {
            let location = window.location.href.split("/");
            location[3] = "AddDoctor";
            console.log(location);
            window.location.href = location.join("/");
            break;
          }
          case "Patient": {
            let location = window.location.href.split("/");
            location[3] = "AddPatient";
            console.log(location);
            window.location.href = location.join("/");
            break;
          }
          case "Treatment": {
            let location = window.location.href.split("/");
            location[3] = "AddTreatment";
            console.log(location);
            window.location.href = location.join("/");
            break;
          }
          default: {
            break;
          }
        }
        break;
      }
      case "Edit": {
        switch (this.props.type) {
          case "Doctor": {
            return <Redirect to={"/EditDoctor"} />;
          }
          case "Patient": {
            return <Redirect to={"/EditPatient"} />;
          }
          case "Treatment": {
            return <Redirect to={"/EditTreatment"} />;
          }
          default: {
            break;
          }
        }
        break;
      }
      case "Delete": {
        switch (this.props.type) {
          case "Doctor": {
            // call delete API for doctor
          }
          case "Patient": {
            // call delete API for patient
          }
          case "Treatment": {
            // call delete API for treatment
          }
          default: {
            break;
          }
        }
        break;
      }
      default:
        break;
    }
  };

  render() {
    return (
      <Row noGutters className="add-edit-delete-menu">
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup
            className="mr-2 add-edit-delete-menu-button"
            aria-label="First group"
          >
            <Button
              variant="primary"
              onClick={() => this.setAddEditDelete("Add")}
            >
              Add new
            </Button>
          </ButtonGroup>

          <ButtonGroup
            className="mr-2 add-edit-delete-menu-buttons"
            aria-label="Second group"
          >
            <Button
              variant="success"
              onClick={() => this.setAddEditDelete("Edit")}
            >
              Edit
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label="Third group" className="mr-2">
            <Button
              variant="danger"
              onClick={() => this.setAddEditDelete("Delete")}
            >
              Delete
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </Row>
    );
  }
}
export default AddEditDeleteMenu;
