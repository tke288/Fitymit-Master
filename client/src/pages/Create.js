import React, { Component } from "react";
import Container from "../components/Container";
import axios from 'axios';
import Row from "../components/Row";
import Col from "../components/Col";
import Login from './Login';
import Hero from "../components/BAMHero";
import Capture from "../Images/mentor2.jpg";
import SignOn from "../Images/SignUpGuy.png";
import One from "../Images/one.png";
import Two from "../Images/two.png";
import Three from "../Images/three.png";
import Schedule from"../Images/schedule.png";
import Connect from "../Images/connect.jpg";

class Create extends Component {
  constructor() {
    super();
    this.state = { data: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    // Pull the name and value properties off of the event.target (the element which triggered the event)
    const { name, value } = e.target;

    // Set the state for the appropriate input field
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("firstName: " + this.state.firstName)
    axios.post('http://localhost:3001/api/submit', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      location: this.state.location,
      industry: this.state.industry,
      headline: this.state.headline,
      pictureUrl: this.state.pictureUrl
    })
      .then(function (response) {
        console.log(response);
        alert("Your profile is under review.  We will contact you shortly.")
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Hero backgroundImage={Capture}>
        </Hero>
        <Container>
          <br />
          <div>
            <h1>Fitymiters need your help!</h1>
            <br />
            <h3>You can help more people than you know, all you have to do is try. Somewhere on this site there is
              a user waiting for the knowledge you've got trapped in your head. They need to successfully jump past
              the hurdles you've already cleared and the perfect person to help them is about to scroll down and 
              become the next mentor. Lets get started!
            </h3>
          </div>
          <Row>
            <Col size="md-6">
              <h2>Step <img src={One} id="numbers" /></h2>
              <br />
              <h3> - Start your Fitymit profile off strong by logging in with LinkedIn and having most of your
                information filled in automatically (including the picture). Be as thorough as possible with your
                profile so people know how good you are. 
              </h3>
            </Col>
            <Col size="md-6">
              <img src={SignOn} id="SOguy"/>
            </Col>
          </Row>
          <Row>
            <Col size="md-6">
            <h2>Step <img src={Two} id="numbers" /></h2>
            <br />
            <h3> - Figure out what times you can be available from week to week. The less changes you make to this
              schedule, the better chance you have of keeping repeat mentees.
              </h3>
            </Col>
            <Col size="md-6">
            <img src={Schedule} id="SOschedule"/>
            </Col>
          </Row>
          <br />
          <Row>
            <Col size="md-6">
            <h2>Step <img src={Three} id="numbers" /></h2>
            <h3> - You'll receive an email from Fitymit alerting you to members who need your help. You will receive 
              a the members profile as well as a brief introduction message from them. If you would like to connect
              with them, simply reply to the Fitymit message and start mentoring!
            </h3>
            </Col>
            <Col size="md-6">
            <img src={Connect} id="connection" />
            </Col>
          </Row>
          <form>
            <fieldset>
              <legend>Become a Mentor!</legend>
              <Login />
              <div class="form-group">
                <label>First Name<input type="text" class="form-control" name="firstName" placeholder="Input Your First Name" onChange={this.handleInputChange} value={this.state.firstName} /></label>
              </div>
              <div class="form-group">
                <label>Last Name<input type="text" class="form-control" name="lastName" placeholder="Input Your Last Name" onChange={this.handleInputChange} value={this.state.lastName} /></label>
              </div>
              <div class="form-group">
                <label>City, State<input type="text" class="form-control" name="location" placeholder="Where Do You Live?" onChange={this.handleInputChange} value={this.state.location} /></label>
              </div>
              <div class="form-group">
                <label>What Industry are you in?<input type="text" class="form-control" name="industry" placeholder="What Industry Are You In?" onChange={this.handleInputChange} value={this.state.industry} /></label>
              </div>
              <div class="form-group">
                <label>What is your job title?<input type="text" class="form-control" name="headline" placeholder="Occupation" onChange={this.handleInputChange} value={this.state.headline} /></label>
              </div>
              <div class="form-group">
                <label>Povide us a link to a picture of yourself<input type="text" class="form-control" name="pictureUrl" placeholder="Link To Your Photo" onChange={this.handleInputChange} value={this.state.pictureUrl} /></label>
              </div>
            </fieldset>
            <form>
              <fieldset>
                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
              </fieldset>
            </form>
          </form>

        </Container>
      </div>
    );
  }
}


export default Create;