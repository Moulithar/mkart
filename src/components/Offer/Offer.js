import React from "react"
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Form from 'react-bootstrap/Form';
// import logo from "./assets/styles/logo.png";

const Offer = () => {
  return (
    <div className="offer text-center">
      <Container>
        <Row>
          <span>
            <h6> special offer</h6>
          </span>
          <h3>top collection</h3>

          <p className="text-center mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. yeah also abigail been sandwiched.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </p>
        </Row>
      </Container>
    </div>
  )
}

export default Offer
