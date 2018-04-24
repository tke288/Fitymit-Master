import React from "react";  
import "./LoginModal.css";
import Logo from "../../../../Images/Logo.png";
import Linkedin from "../../../../pages/Linkedin.js"

const LoginModal = props => (

  <div>
    <div className="modal-overlay-div" onClick={e => {
      e.stopPropagation();
      props.onOverlayClick();
    }} />
    <div className="modal-content-div">
      <div className="modal-dialog-div">
        <img src={Logo} alt="testImage"></img>
        <Linkedin />
        <a href="http://localhost:3000/create" class="btn btn-link">Dont have an LinkedIn? Click Here To Create An Account</a>
      </div>
    </div>
  </div>

);

export default LoginModal;
