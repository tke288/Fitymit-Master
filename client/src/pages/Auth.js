import React from "react";
import axios from 'axios';
import queryString from 'query-string';
import Hero from "../components/Hero";
import Capture from "../Images/mentor4.jpg"

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = { firstName: "FN", headline: "Title" };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillMount() {
        const params = queryString.parse(this.props.location.search);
        this.setState({
            uid: params.uid
        });
    }
    componentDidMount() {
        axios.get("http://localhost:3001/profiledata?uid=" + this.state.uid)
            .then(function (response) {
                const newState = {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    location: response.data.location.name,
                    headline: response.data.headline,
                    pictureUrl: response.data.pictureUrl,
                    industry: response.data.industry,
                };
                this.setState(newState)
                console.log(response);
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
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
            alert("Your profile will be reviewed and we will be in contact.")
            window.location.replace("http://localhost:3000/")
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleCancel(e) {
        e.preventDefault();
        window.location.replace("http://localhost:3000/")
    }



    render() {

        return (
            <div>
                <Hero backgroundImage={Capture}>
                </Hero>
                <div class="card mb-3">
                    <h3 class="card-header">Welcome {this.state.firstName} {this.state.lastName}</h3>
                    <div class="card-body">
                        <h5 class="card-title">Please verify the information below is correct and press Submit if correct.  If incorrect, please hit cancel and manually submit your information.</h5>
                    </div>
                    <img style={{ height: 250, width: 250 }} src={this.state.pictureUrl} alt="Card image" />
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Location: {this.state.location}</li>
                        <li class="list-group-item">Industry: {this.state.industry}</li>
                        <li class="list-group-item">Headline: {this.state.headline}</li>
                    </ul>
                    <div class="card-body">
                        <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                        &nbsp; &nbsp;&nbsp;
                    <button type="submit" class="btn btn-primary" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;

