import React from "react";
import "./Footer.css";
import LI from "../../Images/LIicon.png";
import FB from "../../Images/FBicon.png";
import TW from "../../Images/TWicon.png";

const Footer = () => (
  <footer className="page-footer font-small indigo pt-0">
    <div className="container">
      <div className="row pt-5 mb-3 text-center d-flex justify-content-center" id="topHeader">

        <div className="col-md-3 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="http://localhost:3000/about">About us</a>
          </h6>
        </div>

        <div className="col-md-3 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="http://localhost:3000/discover">Meet A Mentor</a>
          </h6>
        </div>

        <div className="col-md-3 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="http://localhost:3000/create">Become a Mentor</a>
          </h6>
        </div>

        <div className="col-md-3 mb-3">
          <h6 className="text-uppercase font-weight-bold">
            <a href="#!">Contact Us</a>
          </h6>
        </div>

      </div>
      <hr />
      <div className="row">
        <div className="col-md-5"></div>
        <div className="col-md-4"> 
          <img src={LI} id="icon"/>"  "<img src={FB} id="icon" />"  "<img src={TW} id="icon" />
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-12 d-flex" id="signoff">Fitymit.com</div>
      </div>
    </div>

  </footer>
);

export default Footer;
