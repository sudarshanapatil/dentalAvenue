import React, { Component } from 'react'
import '../App.css'
import { Button, Form } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Login () {
  return (
    <div className='login-body'>
      <div className='login-section'>
        Patils Dental Avenue
        <Form>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>

          <Button variant='warning' type='submit'>
            <Link to='/HomeAdmin'>Login</Link>
          </Button>

          <Button variant='warning' type='submit'>
            <Link to='/AdminHome'>Register</Link>
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default Login
