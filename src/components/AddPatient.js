import React from "react";
import { Container, Row,Col,Form,Button } from "react-bootstrap";

const AddPatient = () => {
  return <Form className='newPatienForm'>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Name
    </Form.Label>
    <Col sm='10'>
      <Form.Control type='text' placeholder='Enter Name' />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId='formPlaintextEmail'>
    <Form.Label column sm='2'>
      Email
    </Form.Label>
    <Col sm='10'>
      <Form.Control type='email' placeholder='Enter Email' />
    </Col>
  </Form.Group>

  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Address
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='textarea' rows='2' />
    </Col>
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} controlId='formGridCity'>
      <Form.Label>Age</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId='formGridState'>
      <Form.Label>Gender</Form.Label>
      <Form.Control as='select'>
        <option>Choose...</option>
        <option>Male</option>
        <option>Female</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Past Dental History
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='textarea' rows='2' />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Cheif Compaint
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='textarea' rows='1' />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Previous Dignosis
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='textarea' rows='2' />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Provisional treatment plan
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='textarea' rows='2' />
    </Col>
  </Form.Group>
  <Form.Group as={Row} controlId='formPlaintextPassword'>
    <Form.Label column sm='2'>
      Occupation
    </Form.Label>
    <Col sm='10'>
      <Form.Control as='select'>
        <option>Choose...</option>
        <option>Student</option>
        <option>Service</option>
        <option>Doctor</option>
        <option>Business</option>
        <option>House Wife</option>
      </Form.Control>
    </Col>
  </Form.Group>

  <Button variant='primary' type='submit'>
    Cancel
  </Button>
  <Button variant='primary' type='submit'>
    Save
  </Button>
</Form>;
};

export default AddPatient;
