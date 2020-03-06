import { Button, ButtonToolbar, ButtonGroup, Col } from 'react-bootstrap'
import React, { useState, Component } from 'react'
class AddEditDeleteMenu extends Component {
  render () {
    return (
      <div>
        <ButtonToolbar aria-label='Toolbar with button groups'>
          <ButtonGroup className='mr-2' size='lg' aria-label='First group'>
            <Button
              className='primary'
              onClick={() => this.props.setAddEditDelete('Add')}
            >
              Add new
            </Button>
          </ButtonGroup>

          <ButtonGroup className='mr-2' aria-label='Second group'>
            <Button
              variant='warning'
              onClick={() => this.props.setAddEditDelete('Edit')}
            >
              Edit
            </Button>
          </ButtonGroup>

          <ButtonGroup aria-label='Third group'>
            <Button
              variant='danger'
              onClick={() => this.props.setAddEditDelete('Delete')}
            >
              Delete
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    )
  }
}
export default AddEditDeleteMenu
