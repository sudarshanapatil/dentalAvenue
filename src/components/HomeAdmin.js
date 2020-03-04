import React, { useState } from 'react';
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Row,
  Col
} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function HomeAdmin () {
  return (
    <div className='navbarContainer'>
      <div className='navbarBody'>
        <div className='navbarItem'>Home</div>
        <Link to='/ListTreatment'>
        <div className='navbarItem'>Treatment List</div>
        </Link>
        <Link to='/ListPatient'>
          <div className='navbarItem'>Patients List</div>
        </Link>
        <Link to='/NewPatient'>
          <div className='navbarItem'>Doctors List</div>
        </Link>
        <Link to='/NewPatient'>
          <div className='navbarItem'>Contact Us</div>
        </Link>
        <Link to='/Menubar'>
          <div className='navbarItem'>Navbar</div>
        </Link>
      </div>
    </div>
  )
}
export default HomeAdmin
