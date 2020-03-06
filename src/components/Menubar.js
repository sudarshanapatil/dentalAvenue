import React, {  Component } from 'react'
import '../App.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class Menubar extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className='Row'>
        <Row>
          <Col>
            <Row className='navRow' onClick={() => this.props.setMenuItem('Doctor')}>
              Manage Doctors
            </Row>
            <Row className='navRow' onClick={() => this.props.setMenuItem('Patient')}>
              Manage Patients
            </Row>
            <Row className='navRow' onClick={() => this.props.setMenuItem('Treatment')}>
              Manage Treatments
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Menubar