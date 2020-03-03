import React, { useState } from 'react'
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Row,
  Col
} from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function HomeAdmin () {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='#home'>Admin Portal</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='#home'>Add Patient</Nav.Link>
        <Link to='/NewPatient'>
          <Nav.Link href='#a'>Treatment List</Nav.Link>
        </Link>
        <Link to='/AddTreatment'>
          <Nav.Link href='#a'>Add Treatment</Nav.Link>
        </Link>
        <Nav.Link href='#pricing'>Doctors List</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
        <Button variant='outline-light'>Search</Button>
      </Form>
    </Navbar>
  )
}
export default HomeAdmin
