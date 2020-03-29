import { Button, Table, Row, Col, Image, Container } from 'react-bootstrap'
import React, { useState } from 'react'
import '../styles/CurrentUser.css'
import Navbar from './Navbar'

function CurrentUser () {
  return (
    <Container fluid>
    {/* <Navbar /> */}
    <Row className='currentUserContainer'>
      <Col xs={3}>
        <div className='Row'>Sudarshana Patil</div>
        <div className='Row'>Age : 23</div>
      </Col>
      <Col xs={7}>
      </Col>

      <Col xs={2}>
        <Image
          src={require('./images/userLogo.jpg')}
          style={{ width: 100, height: 100 }}
        />
      </Col>
    </Row>
    </Container>
  )
}
export default CurrentUser
