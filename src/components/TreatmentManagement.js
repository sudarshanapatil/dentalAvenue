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
    let treatments = [
      {
        name: "OPD",
        cost: 2000
      },
      {
        name: "X-Ray",
        cost: 2000
      },
      {
        name: "Scaling/Cleaning",
        cost: 2000
      },
      {
        name: "Filling",
        cost: 2000
      },
      {
        name: "Root canel treatment",
        cost: 2000
      },
      {
        name: "Post and core",
        cost: 2000
      },
      {
        name: "Extraction",
        cost: 2000
      },
      {
        name: "Bridge",
        cost: 2000
      },
      {
        name: "Crown",
        cost: 2000
      },
      {
        name: "Implant",
        cost: 2000
      },
      {
        name: "Removable partial denture",
        cost: 2000
      },
      {
        name: "Complete Denture",
        cost: 2000
      },
      {
        name: "Perio surgery",
        cost: 2000
      },
      {
        name: "Space maintainer",
        cost: 2000
      }
    ];
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
