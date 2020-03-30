import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListPatient from "./ListPatient";
import AddPatient from "./AddPatient";
import ListPatientsTreatment from './ListPatientsTreatment'

class PatientManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId:0,
      patientsData: [],
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
  
  componentDidMount() {
    fetch('http://www.mocky.io/v2/5e7f1ac92f00006600bac26b')
      .then(res => { return res.json() })
      .then(result => {
        console.log(result)
        this.setState({ patientsData: result })
      })
      .catch(err => { console.log(err) })
  }
  savePatientDetails = patientDetails => {
    console.log(patientDetails,"in parent")
    
    this.setState({currentAction:"showPatientTreatments",patientId:121})
 
    //TODO:After API call u will get patient ID
    // fetch('http://www.mocky.io/v2/5e7f1ac92f00006600bac26b')
    //   .then(res => { return res.json() })
    //   .then(result => {
    //     console.log(result)
    //     this.setState({ patientsData: result })
    //   })
    //   .catch(err => { console.log(err) })
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
            <ListPatient patientsData={this.state.patientsData} />
          </Row>
        );
        break;
      }

      case "add": {
        return (
          <AddPatient
            type={"add"}
            setActionType={actionType => this.setActionType(actionType)}
            savePatientDetails={patientDetails => this.savePatientDetails(patientDetails)}
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
      case "showPatientTreatments": {
        return(<ListPatientsTreatment patientId={this.state.patientId}/>)
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
