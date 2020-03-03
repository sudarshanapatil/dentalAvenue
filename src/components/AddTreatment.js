import {
  Button,
  Table,
  Row,
  Col,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import React, { useState } from 'react'
function AddTreatment () {
  return (
    <div>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>Add treatment</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl />
        <FormControl />
      </InputGroup>
      <InputGroup className='mb-3'>
        <InputGroup.Prepend>
          <InputGroup.Text>RS</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label='Amount (to the nearest rupees)' />
        <InputGroup.Append>
          <InputGroup.Text>.00</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </div>
  )
}
export default AddTreatment
