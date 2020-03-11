import React, { Component } from 'react'
import '../App.css'
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Services () {
  return (
    <Container fluid>
      <Row className='servicesTitle'>Case Studies</Row>
      <Row className='serviceCaseStudy'>

      <Row className='serviceImagesRow'>
        <Col className='serviceImageCol'>
          <Row className='serviceImageHeading'>Before Treatment</Row>
          <Row className='serviceImageContainer'>
            <Image
              src={require('./images/services/before1.png')}
              style={{ width: 300, height: 300 }}
            />
          </Row>
        </Col>
        <Col>
          <Row className='serviceImageHeading'>After Treatment</Row>
          <Row className='serviceImageContainer'>
            <Image
              src={require('./images/services/after1.png')}
              style={{ width: 300, height: 300 }}
            />
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
        <Card>
          <Card.Body>
            Every person has a winning feature of their personality which they
            like to highlight more than the others. However, if teeth are
            damaged, chipped or missing then smile becomes a concern. Same day
            dental implant is an implant surgery which doctors use to replace
            missing or chipped teeth by putting in implants in your jaw. The
            implants basically take the place of your damaged teeth roots and
            give a solid base upon which the natural looking tooth can be
            placed.
          </Card.Body>
        </Card>
      </Row>
      <Row className='serviceCaseStudy'>

      <Row className='serviceImagesRow'>
        <Col className='serviceImageCol'>
          <Row className='serviceImageHeading'>Before Treatment</Row>
          <Row className='serviceImageContainer'>
            <Image
              src={require('./images/services/before1.png')}
              style={{ width: 300, height: 300 }}
            />
          </Row>
        </Col>
        <Col>
          <Row className='serviceImageHeading'>After Treatment</Row>
          <Row className='serviceImageContainer'>
            <Image
              src={require('./images/services/after1.png')}
              style={{ width: 300, height: 300 }}
            />
          </Row>
        </Col>
      </Row>
      <Row>
      </Row>
        <Card>
          <Card.Body>
            Every person has a winning feature of their personality which they
            like to highlight more than the others. However, if teeth are
            damaged, chipped or missing then smile becomes a concern. Same day
            dental implant is an implant surgery which doctors use to replace
            missing or chipped teeth by putting in implants in your jaw. The
            implants basically take the place of your damaged teeth roots and
            give a solid base upon which the natural looking tooth can be
            placed.
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
}
export default Services
