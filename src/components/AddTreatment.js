import {
  Button,
  Table,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import React, { useState } from 'react'
function AddTreatment () {
  return (
    <div className='treatmentContainer'>
      <div className='treatmentBody'>
      <InputGroup className='mb-3'>
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
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
    </div>
  )
}
export default AddTreatment
