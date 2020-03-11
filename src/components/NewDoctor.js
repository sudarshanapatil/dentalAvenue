import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'

function NewDoctor () {
  console.log('added')
  return (
    <Form className='newPatienForm'>
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
          Qualification
        </Form.Label>
        <Col sm='10'>
          <Form.Control type='email' placeholder='Enter Email' />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId='formPlaintextPassword'>
        <Form.Label column sm='2'>
          Type
        </Form.Label>
        <Col sm='10'>
          <Form.Control as='textarea' rows='2' />
        </Col>
      </Form.Group>
      <Button variant='primary' type='submit'>
        Cancel
      </Button>
      <Button variant='primary' type='submit'>
        Save
      </Button>
    </Form>
  )
}
export default NewDoctor
