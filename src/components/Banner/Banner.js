import React from "react"
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Form from 'react-bootstrap/Form';
// import logo from "./assets/styles/logo.png";
import images1 from "./assets/styles/images1.jpg"
import images2 from "./assets/styles/images2.jpg"

import "./assets/styles/index.css"

const Banner = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col lg={6}>
          <div className="banner cursor-pointer">
            <img src={images1} className="bannerimg" alt="" />
            <div className="bannertext position-absolute">
              <span>
                <h5>10% off</h5>
              </span>
              <h1>men</h1>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="banner cursor-pointer">
            <img src={images2} className="bannerimg" alt="" />
            <div className="bannertext">
              <span>
                <h5>10% off</h5>
              </span>
              <h1>women</h1>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Banner
