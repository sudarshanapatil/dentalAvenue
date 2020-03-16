import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListPatient from "./ListPatient";
import AddPatient from "./AddPatient";

class PatientManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: "list", // ['list', 'add', 'edit', 'delete']
      patientDetails: {
        name: "",
        email: "",
        address: "",
        age: "",
        gender: "",
        pastDentalHistory: "",
        chiefComplaint: "",
        previousDiagnosis: "",
        provisionalTreatmentPlan: "",
        occupation: ""
      }
    };
  }

  savePatient = patientDetails => {
    // API call to save patient details
  };

  setActionType = actionType => {
    this.setState({
      currentAction: actionType
    });
  };

  renderCurrentScreen = () => {
    switch (this.state.currentAction) {
      case "list": {
        return (
          <Row noGutters>
            <ListPatient />
          </Row>
        );
        break;
      }

      case "add": {
        return (
          <AddPatient
            type={"add"}
            setActionType={actionType => this.setActionType(actionType)}
            savePatient={patientDetails => this.savePatient(patientDetails)}
          />
        );
        break;
      }

      case "edit": {
        return (
          <AddPatient
            type={"edit"}
            patientDetails={this.state.patientDetails} // TODO: send selected patient data
            setActionType={actionType => this.setActionType(actionType)}
          />
        );
        break;
      }

      case "delete": {
        // API call to delete patient details
        // TODO: return popup to delete
        break;
      }

      default:
        break;
    }
  };

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <span className="body-title">Patient Management</span>
        </Row>
        {this.state.currentAction === "list" && (
          <AddEditDeleteMenu
            setActionType={actionType => this.setActionType(actionType)}
          />
        )}
        {this.renderCurrentScreen()}
      </Container>
    );
  }
}

export default PatientManagement;
