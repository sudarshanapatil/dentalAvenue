import { Button, ButtonToolbar, ButtonGroup, Col } from 'react-bootstrap'
import React, { useState } from 'react'
function ListAppoinment () {
  return (
    <div>
      <ButtonToolbar aria-label='Toolbar with button groups'>
        <ButtonGroup className='mr-2' aria-label='First group'>
          <Button>Add new</Button>
        </ButtonGroup>

        <ButtonGroup className='mr-2' aria-label='Second group'>
          <Button>Edit</Button>
        </ButtonGroup>

        <ButtonGroup aria-label='Third group'>
          <Button>Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  )
}
export default ListAppoinment
