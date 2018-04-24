import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Contact from "../components/Contact"
import axios from "axios"
import "../components/Card/Card.css"
import Hero from "../components/MAMHero";
import Capture from "../Images/mentor2.jpg"

document.body.style.backgroundColor = "#DCDCDC"

//class dropDown makes the drop down button work properly
class Discover extends Component {

  state = {
    profileData: []
  };

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    console.log("datacoming")
    axios.get("http://localhost:3001/api/getusers")
      .then(function (response) {
        this.setState({ profileData: response.data })
        console.log(this.state.profileData)
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  }
  //renders the page
  render() {
    return (
      <div>
      <Hero backgroundImage={Capture}>
        </Hero>
        <br></br><br></br>
        <div className="mentors" style={{margin:50}}>
        <Row>
          {this.state.profileData ? this.state.profileData.map(item => {
            return (
              <Col key={item.id} sm="3" className="container">
                <Card className="card" style={{ backgroundColor:"white", border:"solid", borderRadius:12, padding: 10, margin: 10, marginTop:30 }}>
                  <CardImg style={{ height: 175, borderRadius: 12, position:"relative", left:57}} src={item.pictureUrl} alt="Card image cap" />
                  <CardBody>
                    <CardTitle style={{ fontWeight: "bold", fontSize: 25}}>{item.firstName} {item.lastName}</CardTitle>
                    <CardSubtitle style={{fontStyle: "italic", fontSize: 20}}>{item.industry}</CardSubtitle>
                    <CardSubtitle style={{fontStyle: "oblique", fontSize: 15}}>{item.headline}</CardSubtitle>
                    <div className="overlay">
                    <div className="text">${item.hourlyRate} / hour</div>
                    <Contact />
                    </div>
                  </CardBody>
                </Card>
              </Col>
            )
          })
      :null
      }
        </Row>
        </div>
      </div>
    );
  }
}
  

export default Discover