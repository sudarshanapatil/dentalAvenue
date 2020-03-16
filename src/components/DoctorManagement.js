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
      currentScreen: "list" // ['list', 'add', 'edit', 'delete']
    };
  }

  setActionType = currentScreen => {
    this.setState({
      currentScreen,
      doctorDetails: {}
    });
  };

  renderCurrentScreen = () => {
    switch (this.state.currentScreen) {
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
          <AddDoctor type={"add"} doctorDetails={this.state.doctorDetails} />
        );
        break;
      }

      case "edit": {
        // TODO: send selected doctor data
        return (
          <AddDoctor type={"edit"} doctorDetails={this.state.doctorDetails} />
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
          <span className="body-title">Doctor Management</span>
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

export default DoctorManagement;
