import React from "react"
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import dna_image from "../../../public/static/dna_logo.png"
// import Form from 'react-bootstrap/Form';
// import logo from "./assets/styles/logo.png";

const Offer = () => {
  return (
    <div className="offer text-center py-5">
      <Container>
        <Row>
          {/* <img src={dna_image} alt="dna_image" className="img-fluid" style={{width: "10px"}}/> */}
          <span>
            <h6> special offer 3 </h6>
          </span>
          <h3>top collection</h3>

          <p className="text-center mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. yeah also abigail been streak commit 3.
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
