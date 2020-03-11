import React, { Component } from "react";
import "../styles/Login.css";
import { Button, Form, Container, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Login = () => {
  return (
    <Container fluid className="login-body">
      <Card style={{ width: "40rem" }} className="login-container">
        <Card.Body>
          <Card.Title>Patil's Dental Avenue</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Login</Card.Subtitle>
          <Form style={{ textAlign: "start" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                style={{ width: "100%", height: 60 }}
                type="email"
                placeholder="Email Address"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ width: "100%", height: 60 }}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                <Link to="/HomeAdmin">Login</Link>
              </Button>
            </Form.Group>
            <Link to="/HomeAdmin" style={{ textAlign: "center" }}>
              Forgot Password?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
