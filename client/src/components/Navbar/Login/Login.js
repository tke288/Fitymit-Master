import React from "react";
// import { Link } from "react-router-dom";
import "./Login.css";
import LoginModal from "./LoginModal";
// this will show the user name or a prompt to login based on if 
// you are logged in or not



class Login extends React.Component { 
   
    constructor(props) {
        super(props);
        this.state = {LoggedOn: false};
        this.LogIn = this.LogIn.bind(this);
    }
    // this is a method and part of the object so you don't need the fat arrow and =
    LogIn () {
          this.setState({
            LoggedOn: !this.state.LoggedOn
          });
    }

    // CloseModal = () => {
    //     this.setState({LoggedOn: false})
    // }
        
        render() {
        return(
        <div>
        <button onClick={this.LogIn} className="btn-lg btn-round pull-right" id="Login">
        Mentor Login</button>
        {this.state.LoggedOn ? <LoginModal onOverlayClick={() => this.setState({LoggedOn: false})}/>: null}
        </div>
        )}
    // if (LoggedOn === true) {
    //     render() {
    //         <div>
    //             {LoginModal};   
    //         </div>
    //     }
    // }
} 
   

export default Login;