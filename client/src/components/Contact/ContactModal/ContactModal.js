import React from "react";
import "./ContactModal.css";
import ContactConfirm from './ContactConfirm'
import hi5 from './hi5.gif'

const ContactModal = props => (

  <div>
    <div className="modal-overlay-div" onClick={e => {
      e.stopPropagation();
      props.onOverlayClick();
    }} />
    <div className="modal-content-div">
      <div className="modal-dialog-div">
        <form>
          <fieldset>
            <legend>Contact Form</legend>
            <img src={hi5} />
            <div class="form-group">
              <label for="exampleFullName">Full Name</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Joe Smith"></input>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleMentor">Which Mentor Would You Like To Meet</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div class="form-group">
              <label for="exampleTextarea">Please Tell Us Why You Are Looking for A Mentor</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
            <ContactConfirm />
          </fieldset>
        </form>
      </div>
    </div>
  </div>

);

export default ContactModal;