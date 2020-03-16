import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListDoctor from "./ListDoctor";
import AddDoctor from "./AddDoctor";
import "../styles/DoctorManagement.css";

class DoctorManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: "list", // ['list', 'add', 'edit', 'delete']
      doctorDetails: {
        name: "Neha Patil",
        qualification: "MDS",
        type: "permanent"
      }
    };
  }

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
            <ListDoctor />
          </Row>
        );
        break;
      }

      case "add": {
        // TODO: send selected doctor data
        return (
          <AddDoctor
            type={"add"}
            setActionType={actionType => this.setActionType(actionType)}
          />
        );
        break;
      }

      case "edit": {
        // TODO: send selected doctor data
        return (
          <AddDoctor
            type={"edit"}
            doctorDetails={this.state.doctorDetails}
            setActionType={actionType => this.setActionType(actionType)}
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

  render() {
    return (
      <Container fluid>
        <Row noGutters>
          <span className="body-title">Doctor Management</span>
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

export default DoctorManagement;
