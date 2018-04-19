import React, { Component } from "react";
import LinkedInImg from "../Images/signin.png"

class Linkedin extends Component {  

  render() {
    const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78d1v8603anrge&redirect_uri=http://localhost:3001/auth&state=987654321&scope=r_basicprofile";
    return (
        <div className="Login">
            <a href={authurl}><img src={LinkedInImg} alt="Sign in with Linkedin"/></a>
        </div>
    );
}
}

export default Linkedin;
