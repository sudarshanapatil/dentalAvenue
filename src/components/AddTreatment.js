import { Button, Table, Row, Col, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState } from 'react'
function AddTreatment () {
  return (
    <InputGroup className="mb-3">
  <InputGroup.Prepend>
    <InputGroup.Text>Add treatment</InputGroup.Text>
  </InputGroup.Prepend>
  <FormControl />
  <FormControl />
</InputGroup>
  )
}
export default AddTreatment
