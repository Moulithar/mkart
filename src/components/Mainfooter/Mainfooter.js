import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"; // Import Yup for schema validation
import { yupResolver } from '@hookform/resolvers/yup'; 
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import logo from "./assets/styles/logo.png";
import "./assets/styles/index.css";

const Mainfooter = () => {

  const schema = yup.object().shape({
    email: yup.string()
      .email("Invalid email address")
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      , "Email address is not valid")
      .required("Email is required"),
  });
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Use Yup resolver for validation
  });

  const onSubmit = (data) => {
    console.log(data.email);
    reset(); // Reset the form after submission
  };

  return (
    <div className="mainfooter">
      <Container>
        <Row className="main-footer-left">
          <Col lg={6} className="">
            <h5>know it all first </h5>
            <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
            <div className="border-right"></div>
          </Col>
          <Col lg={6}>
          <Form
              className="d-flex gap-2 justify-content-lg-end justify-content-md-start w-100 px-lg-5 px-0"
              onSubmit={handleSubmit(onSubmit)} // Trigger form submission on form submit event
            >
              <Form.Control
                className="formcontrol w-100"
                // type="email"
                placeholder="Enter your email"
                aria-label="Search"
                {...register("email")}
              />
              <Button className="btn-footer text-capitalize" type="submit">
                subscribe
              </Button>
            </Form>
              {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mainfooter;



{/* <hr />
<Row className="pt-5">
  <Col lg={5}>
    <img src={logo} className="rotate-img" alt="" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad minim veniam,
    </p>
    <div className="d-flex"></div>
  </Col>
  <Col lg={2}>
    <h6>my account</h6>
    <ul>
      <li>
        <a className="fromleft" href="">
          {" "}
          women
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          {" "}
          clothing
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          {" "}
          accesories
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          {" "}
          women
        </a>
      </li>
    </ul>
  </Col>
  <Col lg={2}>
    <h6>why we choose</h6>
    <ul>
      <li>
        <a className="fromleft" href="">
          {" "}
          Shipping & Return
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          {" "}
          Secure Shopping
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          {" "}
          Affiliates
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          gallery
        </a>
      </li>
      <li>
        <a className="fromleft" href="">
          contactsy
        </a>
      </li>
    </ul>
  </Col>
  <Col lg={3}>
    <h6>Store Information</h6>
    <p>
      Multikart Demo Store, Demo Store India 345-659
      <br />
      Call Us: 123-456-7898
      <br />
      Email Us: Support@Fiot.Com
      <br />
      Fax: 123456
    </p>
  </Col>
</Row> */}