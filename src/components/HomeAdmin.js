import React, { useState, Component } from 'react'
import { Nav, Button, Form, Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import Menubar from './Menubar'
import AddEditDeleteMenu from './AddEditDeleteMenu'
import ListDoctor from './ListDoctor'
import ListTreatment from './ListTreatment'
import ListPatient from './ListPatient'
import newpatient from './NewPatient'
import DeletePatient from './DeletePatient'
import NewDocor from './NewDoctor'
import NewTreatement from './NewTreatment'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import NewPatient from './NewPatient'

class HomeAdmin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMenuItem: <ListDoctor />,
      optionName: 'Doctor',
      title: 'Doctors Management'
    }
  }

  setAddEditDelete = choise => {
    console.log('current choise', choise, this.state.optionName)
    let CustomTag
    if (choise == 'Add') {
      CustomTag = `New${this.state.optionName}`
      console.log(CustomTag, 'tag')
    }

    switch (choise) {
      case 'Add':
        if (this.state.optionName == 'Doctor') choise = <NewDocor />
        else if (this.state.optionName == 'Patient') choise = <NewPatient />
        else choise = <NewTreatement />

        break
      case 'Edit':
        if (this.state.optionName == 'Doctor') choise = <NewDocor />
        else if (this.state.optionName == 'Patient') choise = <NewPatient />
        else choise = <NewTreatement />
        break
      case 'Delete':
        if (this.state.optionName == 'Doctor') choise = <DeletePatient />
        else if (this.state.optionName == 'Patient') choise = <DeletePatient />
        else choise = <DeletePatient />
        break
    }
    this.setState({
      currentMenuItem: choise
    })
  }
  setMenuItem = menuItem => {
    console.log(menuItem, 'curent item')
    let optionName = menuItem
    let title
    if (menuItem == 'Doctor') {
      menuItem = <ListDoctor />
      title = 'Doctors Management'
    } else if (menuItem == 'Patient') {
      menuItem = <ListPatient />
      title = 'Patients Management'
    } else {
      menuItem = <ListTreatment />
      title = 'Treaments Management'
    }

    this.setState({
      currentMenuItem: menuItem,
      optionName,
      title
    })
  }
  render () {
    console.log(this.state.currentMenuItem, 'stateComp')
    return (
      <Container fluid className='containerHomeAdmin'>
        <Row>
          <Navbar />
        </Row>
        <Row className='detailSectionAdmin'>
          <Col xs={3}>
            <Menubar setMenuItem={menuItem => this.setMenuItem(menuItem)} />
          </Col>
          <Col xs={9}>
            <Row className='rightSectionHeading'>{this.state.title}</Row>
            <Row className=''>
              <AddEditDeleteMenu
                setAddEditDelete={choise => this.setAddEditDelete(choise)}
              />
            </Row>
            <Row>{this.state.currentMenuItem}</Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default HomeAdmin
