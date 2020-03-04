import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

function NewPatient () {
  console.log('added')
  return (
    <div className='newPatientFormBody'>
      <div className='newPatientFormSection'>
        <Form>
          <Form.Group as={Row} controlId='formPlaintextEmail'>
            <Form.Label column sm='2'>
              Email
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Password
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Address
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='Address' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Age
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Sex
            </Form.Label>
            <Col sm='10'>
              <Form.Control as='select' >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Past Dental History
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Occupation
            </Form.Label>
            <Col sm='10'>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
        </Form>
        {/* <Form>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Name
            </Form.Label>
            <Form.Control type='email' placeholder='Enter name' />
          </Form.Group>
          <Form.Group as={Row} controlId='formPlaintextPassword'>
            <Form.Label column sm='2'>
              Address
            </Form.Label>
            <Form.Control type='password' placeholder='Address' />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId='formBasicEmail'>
              <Form.Label column sm='2'>
                Age
              </Form.Label>
              <Form.Control type='email' placeholder='Enter age' />
            </Form.Group>
            <Form.Group as={Col} controlId='formBasicEmail'>
              <Form.Label column sm='2'>
                Sex
              </Form.Label>
              <Form.Control as='select'>
                <option>Choose...</option>
                <option>Male</option>
                <option>Female</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group as={Row} controlId='formBasicEmail'>
            <Form.Label column sm='2'>
              Past Dental History
            </Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter Past Dental History'
            />
          </Form.Group>
          <Form.Group as={Row} controlId='formBasicEmail'>
            <Form.Label column sm='2'>
              Ocuupation
            </Form.Label>
            <Form.Control type='email' placeholder='Enter occupation' />
          </Form.Group>
          <Form.Group as={Row} controlId='formBasicEmail'>
            <Form.Label column sm='2'>
              Mobile Number
            </Form.Label>
            <Form.Control type='email' placeholder='Enter mobile number' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Save Details
          </Button>
        </Form> */}
      </div>
    </div>
  )
}
export default NewPatient
