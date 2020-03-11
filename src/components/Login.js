import React from "react";
import { Button, Form, Container, Card } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <Container fluid className="login-body">
      <Card className="login-container">
        <Card.Body>
          <Card.Subtitle className="card-subtitle">Login</Card.Subtitle>
          <hr className="login-title-hr" />
          <Form style={{ textAlign: "start" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email Address"
                className="login-control"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="password"
                placeholder="Password"
                className="login-control"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Button variant="primary" type="submit" className="login-button">
                <Link to="/HomeAdmin" className="login-button-link">
                  Login
                </Link>
              </Button>
            </Form.Group>
            <Link to="/HomeAdmin" className="login-button-link-2">
              Forgot Password?
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
