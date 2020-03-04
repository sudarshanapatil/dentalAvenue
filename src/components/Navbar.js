import React, { Component } from 'react'
import '../App.css'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
function Navbar () {
  return (
    <div className='navbarContainer'>
      <div className='navbarBody'>
        <div className='navbarItem'>PATILS DENTAL AVENUE</div>
        <Link to='/ListTreatment'>
          <div className='navbarItem'>HOME</div>
        </Link>
        <Link to='/ListPatient'>
          <div className='navbarItem'>ABOUT US</div>
        </Link>
        
        <Link to='/NewPatient'>
          <div className='navbarItem'>Contact Us</div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
