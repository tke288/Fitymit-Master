import React from "react";
import "./Contact.css";
import ContactModal from "./ContactModal";


class Contact extends React.Component { 
   
    constructor(props) {
        super(props);
        this.state = {LoggedOn: false};
        this.LogIn = this.LogIn.bind(this);
    }
    LogIn () {
          this.setState({
            LoggedOn: !this.state.LoggedOn
          });
    }
    handleSubmit(e){
        e.preventDefault()
        alert("Yo")
    }
        
        render() {
        return(
        <div>
        <button onClick={this.LogIn} className="btn-lg btn-round" font="black" id="Meet">
        Meet This Mentor</button>
        {this.state.LoggedOn ? <ContactModal onOverlayClick={() => this.setState({LoggedOn: false})}/>: null}
        </div>
        )}
} 
   

export default Contact;