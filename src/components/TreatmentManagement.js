import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListTreatment from "./ListTreatment";
import AddTreatment from "./AddTreatment";

class TreatmentManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAction: "list", // ['list', 'add', 'edit', 'delete']
      treatmentsList: [],
      treatmentDetails: {}
    };
  }

  componentDidMount = () => {
    this.getTreatmentsList();
  };

  getTreatmentsList = () => {
    // API call to get treatments list
    fetch('http://www.mocky.io/v2/5e819608300000bb386f9853')
      .then(res => res.json())
      .then(result => {
        this.setState({ treatmentsList: result })
      })
      .catch(err => console.log(err))
    let treatments = [];
    this.setState({
      treatmentsList: treatments
    });
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
            <ListTreatment treatmentsList={this.state.treatmentsList} />
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
            setActionType={actionType => this.setActionType(actionType)}
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
          <span className="body-title">Treatment Management</span>
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

export default TreatmentManagement;
