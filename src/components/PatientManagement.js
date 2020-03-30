import React from "react";
import { Container, Row, } from "react-bootstrap";
import AddEditDeleteMenu from "./AddEditDeleteMenu";
import ListPatient from "./ListPatient";
import AddPatient from "./AddPatient";
import ListPatientsTreatment from './ListPatientsTreatment'
import GenerateInvoice from './GenerateInvoice'

class PatientManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: 0,
      patientsData: [],
      invoiceData: [],
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

    this.setState({ currentAction: "showPatientTreatments", patientId: 121 })
    console.log(this.state.currentAction,"saved detals for patient call list")
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

  setActionType = (actionType) => {
    this.setState({
      currentAction: actionType
    });
  };

  sendInvoiceData=(invoiceData)=>{
    this.setState({invoiceData,currentAction:'generateInvoice'})
  }

  renderCurrentScreen = () => {
    switch (this.state.currentAction) {
      case "list": {
        return (
          <Row noGutters>
            <ListPatient patientsData={this.state.patientsData} />
          </Row>
        );      
      }

      case "add": {
        return (
          <AddPatient
            type={"add"}
            setActionType={actionType => this.setActionType(actionType)}
            savePatientDetails={patientDetails => this.savePatientDetails(patientDetails)}
          />
        );    
      }

      case "edit": {
        return (
          <AddPatient
            type={"edit"}
            patientDetails={this.state.patientDetails} // TODO: send selected patient data
            setActionType={actionType => this.setActionType(actionType)}
          />
        );    
      }

      case "showPatientTreatments": {
        return (<ListPatientsTreatment
          sendInvoiceData={this.sendInvoiceData}
          patientId={this.state.patientId} />)       
      }

      case "generateInvoice": {
        return (<GenerateInvoice invoiceData={this.state.invoiceData} />)
        
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
