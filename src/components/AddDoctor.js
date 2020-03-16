import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../styles/AddDoctor.css";

const AddDoctor = props => {
  console.log(props);

  return (
    <Row className="containerHomeAdmin no-padding no-margin">
      <Form className="newPatienForm">
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Doctor's Name
          </Form.Label>
          <Col md="8">
            <Form.Control
              type="text"
              placeholder={
                props.type === "add"
                  ? "Enter Doctor's Name"
                  : props.doctorDetails.name || ""
              }
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column md="4">
            Doctor's Qualification
          </Form.Label>
          <Col md="8">
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Control as="select">
                <option disabled>Select Qualification</option>
                <option>MDS</option>
                <option>Pedodontist</option>
                <option>MBBS</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column md="4">
            Doctor's Type
          </Form.Label>
          <Col md="8">
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Control as="select">
                <option disabled>Select Type</option>
                <option>Permanent Doctor</option>
                <option>Visiting Doctor</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Group>
        <Button
          variant="secondary"
          className="form-button"
          onClick={() => props.setAddEditDelete("list")}
        >
          Cancel
        </Button>
        <Button variant="primary" type="submit" className="form-button">
          Save
        </Button>
      </Form>
    </Row>
  );
};

export default AddDoctor;
