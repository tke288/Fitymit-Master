import React from "react";
import { Link } from "react-router-dom";
import "./LoginModal.css";
import Logo from "../../../../Images/Logo.png";
import Linkedin from "../../../../pages/Linkedin.js"

const LoginModal = props => (
    
    <div>
    <div className="modal-overlay-div" onClick={e=>{
      e.stopPropagation();
      props.onOverlayClick();
      }}/>
    <div className="modal-content-div">
      <div className="modal-dialog-div">
     
        <img src={Logo} alt="test this bitch"></img>
        
          <form>
            Email:<br />
            <input type="text" name="email" />
            Password: <br />
            <input type="text" name="password" />
            <br />
            <br />
            <input type="submit" value="Connect Passport Here" />
            <br />
            <Linkedin />
          </form>
      </div>
    </div>
  </div>
 
);

export default LoginModal;