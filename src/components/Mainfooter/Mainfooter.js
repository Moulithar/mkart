import React from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup" // Import Yup for schema validation
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import logo from "./assets/styles/logo.png"
import "./assets/styles/index.css"
import MkBtn from "../MkBtn/MkBtn"
import styled from "styled-components"

const Seperator = styled.div`
width: 1px;
height: 100%;
background-color: #ddd;
`

const Mainfooter = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email address")
      .matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email address is not valid"
      )
      .required("Email is required"),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Use Yup resolver for validation
  })

  const onSubmit = data => {
    console.log(data.email)
    reset() // Reset the form after submission
  }

  return (
    <div className="mainfooter pt-5">
      <Container>
        <Row className="main-footer-left">
          <Col lg={5} >
            <h5>know it all first </h5>
            <p>
              Never Miss Anything By Signing Up To Our
              Newsletter.
            </p>
            {/* <div className="border-right"></div> */}
          </Col>
          <Col lg={2} className="d-flex align-items-center justify-content-center">

          <Seperator />
          </Col>
          <Col lg={5} className="mt-2">
            <Form
              className="d-flex gap-2 justify-content-lg-end justify-content-md-start w-100"
              onSubmit={handleSubmit(onSubmit)} // Attach handleSubmit to the form
            >
              <Form.Control
                className="formcontrol w-100 m-0"
                // type="email"
                placeholder="Enter your email"
                aria-label="Search"
                {...register("email")}
                style={{
                  boxShadow: "none",
                  outline: "none",
                }}
              />
              <Button type="submit" className="mk-btn">
          
                Subscribe
              </Button>{" "}
              {/* Use a regular Button for submission */}
            </Form>
              {errors.email && (
              <span className="text-danger">{errors.email.message}</span>
            )}
          </Col>
        </Row>

        <hr />
        <Row className="">
          <Col lg={5}>
            <img
              src={logo}
              className="rotate-img mb-4 h-auto"
              alt=""
              style={{
                width: "100px",
                height: "25px",
              }}
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>
            <div className="d-flex"></div>
          </Col>
          <Col lg={2}>
            <h6 className="footer-heading mt-3">my account</h6>
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
            <h6 className="footer-heading mt-3">why we choose</h6>
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
                  contacts
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={3}>
            <h6 className="footer-heading mt-3">Store Information</h6>
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
        </Row>
      </Container>
    </div>
  )
}

export default Mainfooter
