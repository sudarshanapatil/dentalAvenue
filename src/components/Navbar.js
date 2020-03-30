import React from "react";
import "../styles/Navbar.css";
import { Row, Col, } from "react-bootstrap";
import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Row noGutters className="navbar-header">
      <Col md={4}>
        <Link to="/HomeAdmin" className="navbar-link">
          <div className="navbar-item navbar-title">PATIL'S DENTAL AVENUE</div>
        </Link>
      </Col>
      <Col md={2}></Col>
      <Col md={1}>
        <Link to="/HomeAdmin" className="navbar-link">
          <div className="navbar-item">Home</div>
        </Link>
      </Col>
      <Col md={1}>
        <Link to="/Services" className="navbar-link">
          <div className="navbar-item">Blog</div>
        </Link>
      </Col>
      <Col md={1}>
        <Link to="/AboutUs" className="navbar-link">
          <div className="navbar-item">Team</div>
        </Link>
      </Col>
      <Col md={1}>
        <Link to="/Services" className="navbar-link">
          <div className="navbar-item">Services</div>
        </Link>
      </Col>
      <Col md={1}>
        <Link to="/ContactUs" className="navbar-link">
          <div className="navbar-item">Contact Us</div>
        </Link>
      </Col>
      <Col md={1}>
        <Link to="/login" className="navbar-link">
          <div className="navbar-item">Login</div>
        </Link>
      </Col>
    </Row>
    // </Container>
  );
};
export default Navbar;
