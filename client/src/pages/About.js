import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Capture from "../Images/mentor1.jpg"
import Skype from "../Images/skypecall.jpg"
import LinkedIn from "../Images/linkedinpic.png"

const About = () => (
  <div>
    <Hero backgroundImage={Capture}>
    </Hero>
    <Container style={{ marginTop: 60 }}>
      <Row>
        <Col size="md-12">
          <h1>What is Fitymit?!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <br />
          <h3>
            (find a font for this)Have you ever walked into an interview feeling like you're about to get ambushed? Of course you have, 
            we all have. Fitymit is your resource to eliminate that risk for yourself and possibly for others, all while
            making a little extra money on the side.
          </h3>
          <br />
          <hr />
          <br />
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col size="md-6">
        <h1>Meet a Mentor</h1>
        <br />
        <h3>
          Find that person that knows what you need to know! You can search our directory of "mentors" who 
          can help get the inside information you need to attack this interview. Choose the industry you're 
          looking to get into and we will set up a Skype meeting with them. 
        </h3>
        </Col>
        <Col size="md-6">
        <div>
          <img src={Skype} id="skype"/>
        </div>
        </Col>
      </Row>
      <hr />
      <br />
      <br />
      <br />
      <Row>
        <Col size="md-6">
        <div>
          <img src={LinkedIn} id="LinkedIn"/>
        </div>
        </Col>
        <Col size="md-6">
        <h1>Become a Mentor</h1>
        <br />
        <h3>
          Believe it or not, just by going to work every day you have information that people want and are willing 
          to pay for. You made it through the interview gauntlet and came out the other side successful. Now put that
          experience to use and make a little money on the side. Click the link below to find out how you can become 
          our next mentor. 
        </h3>
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;
