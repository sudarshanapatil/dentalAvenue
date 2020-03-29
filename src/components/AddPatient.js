import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
class AddPatient extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state, "form")
  }
  render() {
    console.log(this.props,"props")
    let patientDetails = {}; // TO CHECK: may need to make stateful due to form changes
    return (
      <Form className="newPatienForm" onSubmit={this.handleSubmit}>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Name
        </Form.Label>
          <Col md="8">
            <Form.Control type="text" 
            name="name"
            onChange={this.handleChange}
            placeholder="Enter Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column md="4">
            Email
        </Form.Label>
          <Col md="8">
            <Form.Control type="email" 
            name="email"
            onChange={this.handleChange}
            placeholder="Enter Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Address
        </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" 
            name="address"
            onChange={this.handleChange}
            rows="2" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridCity">
          <Form.Label column md="4">
            Age
        </Form.Label>
          <Col md="8">
            <Form.Control 
            name="age"
            onChange={this.handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formGridState">
          <Form.Label column md="4">
            Gender
        </Form.Label>
          <Col md="8">
            <Form.Control as="select"
            name="gender"
            onChange={this.handleChange}
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Past Dental History
        </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="2" 
            name="pastDentalHistory"
            onChange={this.handleChange}/>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Cheif Compaint
        </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="1" 
            name="chiefComplaint"
            onChange={this.handleChange}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Previous Dignosis
        </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="2"
            name="previousDiagnosis"
            onChange={this.handleChange} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Provisional treatment plan
        </Form.Label>
          <Col md="8">
            <Form.Control as="textarea" rows="2" 
            name="provisionalTreatmentPlan"
            onChange={this.handleChange}/>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Occupation
        </Form.Label>
          <Col md="8">
            <Form.Control as="select"
            name="occupation"
            onChange={this.handleChange}>
              <option>Choose...</option>
              <option>Student</option>
              <option>Service</option>
              <option>Doctor</option>
              <option>Business</option>
              <option>House Wife</option>
            </Form.Control>
          </Col>
        </Form.Group>

        <Button
          variant="secondary"
          className="form-button"
          onClick={() => this.props.setActionType("list")}
        >
          Cancel
      </Button>
        <Button
          variant="primary"
          type="submit"
          className="form-button"
           onClick={() => this.props.savePatientDetails(this.state)}
        >
          Save
      </Button>
      </Form>
    );
  }
};

export default AddPatient;
