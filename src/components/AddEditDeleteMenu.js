import React from 'react'
import { Button, ButtonToolbar, ButtonGroup, Row,Form,FormControl } from 'react-bootstrap'
import '../styles/AddEditDeleteMenu.css'

const AddEditDeleteMenu = props => {
  
  return (
    <Row noGutters className='add-edit-delete-menu'>
      <ButtonToolbar aria-label='Toolbar with button groups'>
        <ButtonGroup
          className='mr-2 add-edit-delete-menu-button'
          aria-label='First group'
        >
          <Button variant='primary' onClick={() => props.setActionType('add')}>
            Add new
          </Button>
        </ButtonGroup>

        <ButtonGroup
          className='mr-2 add-edit-delete-menu-buttons'
          aria-label='Second group'
        >
          <Button variant='success' onClick={() => props.setActionType('edit')}>
            Edit
          </Button>
        </ButtonGroup>

        <ButtonGroup aria-label='Third group' className='mr-2'>
          <Button
            variant='danger'
            onClick={() => props.setActionType('delete')}
          >
            Delete
          </Button>
        </ButtonGroup>

        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-primary'>Search</Button>
        </Form>
      </ButtonToolbar>
    </Row>
  )
}
export default AddEditDeleteMenu
