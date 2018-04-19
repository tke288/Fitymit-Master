import React from "react";
import axios from 'axios';
import queryString from 'query-string';

class Auth extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {firstName:"FN", headline:"Title"};
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentWillMount(){
        const params = queryString.parse(this.props.location.search);
        this.setState({
            uid : params.uid
          });
    }
    componentDidMount(){
        axios.get("http://localhost:3001/profiledata?uid=" + this.state.uid)
        .then(function (response) {
            const newState = {
                firstName : response.data.firstName,
                lastName : response.data.lastName,
                location : response.data.location.name,
                headline : response.data.headline,
                pictureUrl : response.data.pictureUrl,
                industry  : response.data.industry,
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
        })
        .catch(function (error) {
          console.log(error);
        });
      }
      handleCancel(e) {
        e.preventDefault();
        window.location.replace("http://localhost:3000/")
    }



    render(){

        return (
            <div>
                <h2>Welcome {this.state.firstName} {this.state.lastName}</h2>
                <img src = {this.state.pictureUrl} alt = "profilepic"></img>
                <p>Please verify the information below is correct and press Submit if correct.  If incorrect, please hit cancel and manually submit your information.</p>
                <ul>
                    <li>Location: {this.state.location}</li>
                    <li>Industry: {this.state.industry}</li>
                    <li>Headline: {this.state.headline}</li>
                </ul>

                <input type="submit" onClick={this.handleSubmit} />
                <input type="submit" onClick={this.handleCancel} className="Cancel" value="Cancel" />
            </div>
        )
    }
}

export default Auth;
