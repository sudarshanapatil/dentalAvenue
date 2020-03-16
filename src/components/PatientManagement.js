import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListPatient from "./ListPatient";
import AddPatient from "./AddPatient";

class PatientManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "list" // ['list', 'add', 'edit', 'delete']
    };
  }

  setActionType = currentScreen => {
    this.setState({
      currentScreen,
      patientDetails: {}
    });
  };

  renderCurrentScreen = () => {
    switch (this.state.currentScreen) {
      case "list": {
        return (
          <Row noGutters>
            <ListPatient />
          </Row>
        );
        break;
      }

      case "add": {
        // TODO: send selected patient data
        return (
          <AddPatient type={"add"} patientDetails={this.state.patientDetails} />
        );
        break;
      }

      case "edit": {
        // TODO: send selected patient data
        return (
          <AddPatient
            type={"edit"}
            patientDetails={this.state.patientDetails}
          />
        );
        break;
      }

      case "delete": {
        // TODO: return popup to delete
        break;
      }

      default:
        break;
    }
  };

  setAddEditDelete = actionType => {
    this.setState({
      currentScreen: actionType
    });
  };

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <span className="body-title">Patient Management</span>
        </Row>
        {this.state.currentScreen === "list" ? (
          <AddEditDeleteMenu
            setAddEditDelete={this.setAddEditDelete.bind(this)}
          />
        ) : (
          <Button variant="dark" onClick={() => this.setAddEditDelete("list")}>
            Back
          </Button>
        )}
        {this.renderCurrentScreen()}
      </Container>
    );
  }
}

export default PatientManagement;
