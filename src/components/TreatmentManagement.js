import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListTreatment from "./ListTreatment";
import AddTreatment from "./AddTreatment";

class TreatmentManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: "list" // ['list', 'add', 'edit', 'delete']
    };
  }

  setActionType = currentScreen => {
    this.setState({
      currentScreen,
      treatmentDetails: {}
    });
  };

  renderCurrentScreen = () => {
    switch (this.state.currentScreen) {
      case "list": {
        return (
          <Row noGutters>
            <ListTreatment />
          </Row>
        );
        break;
      }

      case "add": {
        // TODO: send selected treatment data
        return (
          <AddTreatment
            type={"add"}
            treatmentDetails={this.state.treatmentDetails}
          />
        );
        break;
      }

      case "edit": {
        // TODO: send selected treatment data
        return (
          <AddTreatment
            type={"edit"}
            treatmentDetails={this.state.treatmentDetails}
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
          <span className="body-title">Treatment Management</span>
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

export default TreatmentManagement;
