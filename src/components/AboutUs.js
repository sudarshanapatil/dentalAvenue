import React, { useState, Component } from "react";
import "../App.css";
import { Button, Col, Image, Card, Row, Container } from "react-bootstrap";
import Navbar from "./Navbar";

let drArr = [
  {
    img: require("./images/drPrashant.jpg"),
    name: "Dr. Neha Patil",
    degree: "MDS, Pedodontist",
    contact: "8778454523"
  },
  {
    img: require("./images/drNeha.jpg"),
    name: "Dr. Prashant Patil",
    degree: "MDS, Pedodontist",
    contact: "8778454523"
  },
  {
    img: require("./images/drPrashant.jpg"),
    name: "Dr. Prashant Patil",
    degree: "MDS, Pedodontist",
    contact: "8778454523"
  },
  {
    img: require("./images/drNeha.jpg"),
    name: "Dr. Prashant Patil",
    degree: "MDS, Pedodontist",
    contact: "8778454523"
  }
];
function AboutUs() {
  return (
    <Container fluid>
      <Navbar />
      <Row className="aboutTitle">About Us</Row>
      <hr></hr>
      <Row className="aboutText">
        We are team of doctors helping the people to get best of dental
        treatment and help you kepp smiling!
      </Row>
      <Row>
        {drArr.map(key => (
          <Col style={{ height: 900 }}>
            <Card style={{ width: "18rem", backgroundColor: "lightblue" }}>
              <Image
                style={{ height: 300 }}
                variant="top"
                src={key.img}
                roundedCircle
              />
              <Card.Body>
                <Card.Title>{key.name}</Card.Title>
                <Card.Text>{key.degree}</Card.Text>
                <Card.Text>{key.contact}</Card.Text>
                <Button variant="primary">More Info</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default AboutUs;
