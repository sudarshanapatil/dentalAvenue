import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Navbar from './Navbar'
function Menubar () {
  return (
    <div className='Row'>
      <Row>
        <Navbar />
      </Row>
      <Row>
        <Col>
          <Row className='navRow'>Manage Doctors</Row>
          <Row className='navRow'>Manage Patients</Row>
          <Row className='navRow'>Manage Treatments</Row>
        </Col>

        <Col xs={9}>
          <Row className='rightSectionHeading'>Doctors Management</Row>
        </Col>
      </Row>
    </div>
  )
}

export default Menubar
