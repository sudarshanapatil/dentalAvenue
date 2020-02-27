import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

function NewPatient () {
  // Declare a new state variable, which we'll call "count"
  console.log('added')
  //const [count, setCount] = useState(0);
  return (
    <div className='newPatientFormBody'>
      <div className='newPatientFormSection'>
        <Form>
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
        </Form>
      </div>
    </div>
  )
}
export default NewPatient
