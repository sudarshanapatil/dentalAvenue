import React, { useState, Component } from 'react'
import { Nav, Button, Form, FormControl, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'
import Menubar from './Menubar'
import AddEditDeleteMenu from './AddEditDeleteMenu'
import ListDoctor from './ListDoctor'
import ListTreatment from './ListTreatment'
import ListPatient from './ListPatient'
import newpatient from './NewPatient'
import DeletePatient from './DeletePatient'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
class HomeAdmin extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMenuItem: <ListDoctor />,
      optionName: 'Doctor'
    }
  }

  setAddEditDelete = choise => {
    console.log('current choise', choise, this.state.optionName)
    let CustomTag 
    if (choise == 'Add') {
      CustomTag  =`New${this.state.optionName}`
       console.log(CustomTag ,"tag")
    }

    switch (choise) {
      case 'Add':
        choise = <CustomTag></CustomTag>
        break
      case 'Edit':
        choise = <DeletePatient />
        break
      case 'Delete':
        choise = <DeletePatient />
        break
    }
    this.setState({
      currentMenuItem: choise
    })
  }
  setMenuItem = menuItem => {
    console.log(menuItem, 'curent item')
    let optionName = menuItem
    if (menuItem == 'Doctor') menuItem = <ListDoctor />
    else if (menuItem == 'Patient') menuItem = <ListPatient />
    else menuItem = <ListTreatment />

    this.setState({
      currentMenuItem: menuItem,
      optionName
    })
  }
  render () {
    console.log(this.state.currentMenuItem, 'stateComp')
    return (
      <Row>
        <Navbar />
        <Col>
          <Menubar setMenuItem={menuItem => this.setMenuItem(menuItem)} />
        </Col>
        <Col xs={9}>
          <Row className='rightSectionHeading'>Doctors Management</Row>
          <Row className=''>
            <AddEditDeleteMenu
              setAddEditDelete={choise => this.setAddEditDelete(choise)}
            />
          </Row>
          <Row>{this.state.currentMenuItem}</Row>
        </Col>
      </Row>
    )
  }
}
export default HomeAdmin
