import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import Contact from "../components/Contact"
import axios from "axios"
import Hero from "../components/Hero";
import Capture from "../Images/mentor2.jpg"

//class dropDown makes the drop down button work properly
class Discover extends Component {

  state = {
    dropdownOpen: false,
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

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  //renders the page
  render() {
    return (
      <div>
        <Hero backgroundImage={Capture}>
        </Hero>
        <h1 className="text-center"
          style={{ fontSize: 75, padding: 150 }}
        >Meet a Mentor!</h1>
        <br></br><br></br>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret size="md"
            style={{ marginLeft: 10 }}
          >
            Search By Industry
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Another Industry</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
        <br></br><br></br>
        <Row>
          {this.state.profileData ? this.state.profileData.map(item => {
            return (
              <Col key={item.id} sm="3">
                <Card className="card" style={{ border: "solid", padding: 10, margin: 10 }}>
                  <CardImg style={{ height: 225}} src={item.pictureUrl} alt="Card image cap" />
                  <CardBody >
                    <CardTitle style={{ fontWeight: "bold", fontSize: 25}}>{item.firstName} {item.lastName}</CardTitle>
                    <CardSubtitle style={{fontStyle: "italic", fontSize: 20}}>{item.industry}</CardSubtitle>
                    <CardSubtitle style={{fontStyle: "oblique", fontSize: 15}}>{item.headline}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Contact />
                  </CardBody>
                </Card>
              </Col>
            )
          })
      :null
      }
        </Row>
      </div>
    );
  }
}
  

export default Discover
