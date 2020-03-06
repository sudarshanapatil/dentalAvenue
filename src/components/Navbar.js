import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Container, Row, Col,Image } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Navbar () {
  return (
    <div className='navbarContainer'>
      <div className='navbarBody'>
        <div className='clinicLogo'>
          <Image src={require('./images/logo.png')} roundedCircle />
      
          </div>
        <Link to='/ListTreatment'>
          <div className='navbarItem'>Home</div>
        </Link>
        <Link to='/AboutUs'>
          <div className='navbarItem'>Blog</div>
        </Link>
        <Link to='/AboutUs'>
          <div className='navbarItem'>Team</div>
        </Link>
        <Link to='/AboutUs'>
          <div className='navbarItem'>Services</div>
        </Link>
        
        <Link to='/NewPatient'>
          <div className='navbarItem'>Contact Us</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
