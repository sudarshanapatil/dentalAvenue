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
      doctorsList: [],
      doctorDetails: {
        name: "Neha Patil",
        qualification: "MDS",
        type: "permanent"
      }
    };
  }

  componentDidMount = () => {
    console.log("in component did mount")

    fetch('https://reqres.in/api/users?page=2')
    .then(res=>res.json())
    .then(result=>{console.log(result,"res")})
    .catch(err=>console.log(err))
    this.getDoctorsList();
  };

  getDoctorsList = () => {
    // To be replaced with API call to fetch doctors list
    let list = [
      {
        id: 1,
        name: "Dr. Prashant Patil",
        type: "Regular",
        qualification: "Implantologist"
      },
      {
        id: 2,
        name: "Dr. Neha Patil",
        type: "Regular",
        qualification: "Pedodontist"
      },
      {
        id: 3,
        name: "Dr. Mahesh Patil",
        type: "Visting",
        qualification: "Prostodontist"
      },
      {
        id: 3,
        name: "Dr. Jitendra Patil",
        type: "Visting",
        qualification: "Pedodontist"
      },
      {
        id: 3,
        name: "Dr. Varsha Patil",
        type: "Visting",
        qualification: "Pedodontist"
      }
    ];
    this.setState({
      doctorsList: list
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
            <ListDoctor doctorsList={this.state.doctorsList} />
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
