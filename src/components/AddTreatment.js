import React, { useState } from "react";
import {
  Button,
  Table,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  InputGroup,
  Form
} from "react-bootstrap";

const AddTreatment = props => {
  return (
    <Form className="newPatienForm">
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Enter Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Cost
        </Form.Label>
        <Col sm="10">
          <Form.Control type="email" placeholder="Enter Email" />
        </Col>
      </Form.Group>

      <Button
        variant="secondary"
        className="form-button"
        onClick={() => props.setActionType("list")}
      >
        Cancel
      </Button>
      <Button variant="primary" type="submit" className="form-button">
        Save
      </Button>
    </Form>
  );
};
export default AddTreatment;
