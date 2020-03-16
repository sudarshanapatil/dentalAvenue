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

const AboutUs = () => {
  return (
    <Container fluid className="no-padding no-margin">
      <Navbar />
      <Row noGutters className="aboutTitle">
        About Us
      </Row>
      <hr width="80%"></hr>
      <Row noGutters className="aboutText">
        We are team of doctors helping the people to get best of dental
        treatment and help you keep smiling!
      </Row>
      <Row noGutters>
        <Col md="3" style={{ height: 900 }}>
          {/* <Card style={{ width: "2rem", backgroundColor: "lightblue" }}>
            <Image
              style={{ height: 300 }}
              variant="top"
              src={require("./images/drPrashant.jpg")}
              roundedCircle
            />
            <Card.Body>
              <Card.Title>{"key.name"}</Card.Title>
              <Card.Text>{"key.degree"}</Card.Text>
              <Card.Text>{"key.contact"}</Card.Text>
              <Button variant="primary">More Info</Button>
            </Card.Body>
          </Card> */}
        </Col>
        {/* {drArr.map(key => (
          <Col md="3" style={{ height: 900 }}>
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
        ))} */}
      </Row>
    </Container>
  );
};
export default AboutUs;
