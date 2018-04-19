import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Capture from "../Images/Capture.PNG"

const About = () => (
  <div>
    <Hero backgroundImage={Capture}>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To FityMit!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Lets learn some shit!
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
