import React, { Component } from "react";
import Container from "../components/Container";
import axios from 'axios';
import Login from './Login';
import Hero from "../components/Hero";
import Capture from "../Images/mentor3.jpg"

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
