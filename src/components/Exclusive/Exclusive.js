import React, { useState } from "react"
// import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import Form from 'react-bootstrap/Form';
// import logo from "./assets/styles/logo.png";
import fashion1 from "./assets/styles/5.jpg"
import fashion2 from "./assets/styles/8.jpg"
import fashion3 from "./assets/styles/14.jpg"
import fashion4 from "./assets/styles/25.jpg"
import fashion5 from "./assets/styles/26.jpg"
import fashion6 from "./assets/styles/33.jpg"
import fashion7 from "./assets/styles/39.jpg"
import fashion8 from "./assets/styles/40.jpg"
import "./assets/styles/index.css"
import styled, { keyframes } from "styled-components"
import { Nav, Tab } from "react-bootstrap"

const fadeIn = keyframes`
  from {
opacity: 0;
transform: translateX(20px);
}
to {
  
  opacity: 1;
    transform: translateX(0px);
  }
`
const StyledCol = styled(Col)`
  position: relative;
  transition: all ease 0.8s;

  &:hover {
    .hover-icons > div {
      animation: ${fadeIn} 0.5s ease forwards;
      &:nth-child(1) {
        animation-delay: 0.2s;
      }
      &:nth-child(2) {
        animation-delay: 0.4s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.8s;
      }
    }
  }
  .hover-icons {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    bottom: 2%;
    right: 7%;
    transition: all ease 0.8s;

    &:hover > div {
      animation: none; // Reset animation on hover
      animation-play-state: running;
    }
  }

  &:hover {
    .hover-icons {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const StyledVerticalText = styled.div`
  font-size: 14px;
  font-weight: 700;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  position: absolute;
  top: 14px;
  right: 7px;
`
const Exclusive = () => {
  const data1 = [
    {
      img: fashion1,
      cost: "145.00",
      starRating: "5",
      discount: "87.00",
      name: "Trim Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion2,
      cost: "120.00",
      starRating: "3.5",
      discount: "60.00",
      name: "Belted Top",
      new: false,
      onSale: true,
    },
    {
      img: fashion3,
      cost: "90.00",
      starRating: "4",
      discount: "45.00",
      name: "V-neck Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion4,
      cost: "200.00",
      starRating: "3",
      discount: "30.00",
      name: "Maxi Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "75.00",
      starRating: "4.5",
      discount: "15.00",
      name: "Fit-flare Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion6,
      cost: "180.00",
      starRating: "3.5",
      discount: "90.00",
      name: "Midi Dress",
      new: false,
      onSale: true,
    },
    {
      img: fashion7,
      cost: "95.00",
      starRating: "4",
      discount: "19.00",
      name: "Tulip Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion8,
      cost: "150.00",
      starRating: "5",
      discount: "75.00",
      name: "Skater Dress",
      new: false,
      onSale: true,
    },
  ]
  const data2 = [
    {
      img: fashion1,
      cost: "145.00",
      starRating: "5",
      discount: "87.00",
      name: "Trim Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion2,
      cost: "120.00",
      starRating: "3.5",
      discount: "60.00",
      name: "Belted Top",
      new: false,
      onSale: true,
    },
    {
      img: fashion3,
      cost: "90.00",
      starRating: "4",
      discount: "45.00",
      name: "V-neck Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion4,
      cost: "200.00",
      starRating: "3",
      discount: "30.00",
      name: "Maxi Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "75.00",
      starRating: "4.5",
      discount: "15.00",
      name: "Fit-flare Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion6,
      cost: "180.00",
      starRating: "3.5",
      discount: "90.00",
      name: "Midi Dress",
      new: false,
      onSale: true,
    },
    {
      img: fashion7,
      cost: "95.00",
      starRating: "4",
      discount: "19.00",
      name: "Tulip Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion8,
      cost: "150.00",
      starRating: "5",
      discount: "75.00",
      name: "Skater Dress",
      new: false,
      onSale: true,
    },
  ]
  const data3 = [
    {
      img: fashion1,
      cost: "145.00",
      starRating: "5",
      discount: "87.00",
      name: "Trim Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion2,
      cost: "120.00",
      starRating: "3.5",
      discount: "60.00",
      name: "Belted Top",
      new: false,
      onSale: true,
    },
    {
      img: fashion3,
      cost: "90.00",
      starRating: "4",
      discount: "45.00",
      name: "V-neck Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion4,
      cost: "200.00",
      starRating: "3",
      discount: "30.00",
      name: "Maxi Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "75.00",
      starRating: "4.5",
      discount: "15.00",
      name: "Fit-flare Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion6,
      cost: "180.00",
      starRating: "3.5",
      discount: "90.00",
      name: "Midi Dress",
      new: false,
      onSale: true,
    },
    {
      img: fashion7,
      cost: "95.00",
      starRating: "4",
      discount: "19.00",
      name: "Tulip Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion8,
      cost: "150.00",
      starRating: "5",
      discount: "75.00",
      name: "Skater Dress",
      new: false,
      onSale: true,
    },
  ]

  const [arrayContent, setArrayContent] = useState(1)
  const showContent1 = () => {
    setArrayContent(1)
  }
  const showContent2 = () => {
    setArrayContent(2)
  }
  const showContent3 = () => {
    setArrayContent(3)
  }

  const navsTabs = [
    {
      id: 1,
      label: "best seller",
      contentArray: data1,
      onClick: showContent1,
    },
    {
      id: 2,
      label: "feautrued products",
      contentArray: data2,
      onClick: showContent2,
    },
    { id: 3, label: "on sale", contentArray: data3, onClick: showContent3 },
  ]

  return (
    <Container className="">
      <Row>
        <div className="text-center">
          <span>
            <h6> Exclusive Products</h6>
          </span>
          <h3>SPECIAL PRODUCTS</h3>
        </div>
        <div className="">
          {navsTabs.map((data, index) => (
            <>
              <div className="text-uppercase d-flex  justify-content-center gap-5">
                <p
                  style={{
                    color: "#FF5141",
                  }}
                  onClick={data?.onClick}
                >
                  {data?.label}
                </p>
              </div>
              <div className="row">
                {arrayContent === data.id && (
                  <>
                    {data?.contentArray.map((data, index) => (
                      <StyledCol lg={3} key={index} className="g-4">
                        <div className="excluisve cursor-pointer position-relative">
                          {data?.new && (
                            <div
                              className="rounded-circle d-flex align-items-center justify-content-center position-absolute"
                              style={{
                                backgroundColor: "#FF5141",
                                padding: "9px 4px",
                                top: "7px",
                                left: "7px",
                                fontWeight: "700",
                              }}
                            >
                              <p
                                className="text-white"
                                style={{ fontSize: "13px" }}
                              >
                                NEW
                              </p>
                            </div>
                          )}
                          {data?.onSale && (
                            <StyledVerticalText className="text-uppercase">
                              on &nbsp;sale
                            </StyledVerticalText>
                          )}
                          <img src={data?.img} className="img-fluid" alt="" />
                        </div>
                        <p>{data?.name}</p>

                        <div className="d-flex gap-2">
                          <p
                            className="text-black"
                            style={{ fontWeight: "1000" }}
                          >
                            ${data?.discount}
                          </p>
                          <p>
                            {" "}
                            <s>${data?.cost}</s>
                          </p>
                        </div>
                        <div className="hover-icons">
                          <div>
                            <i className="icons bi bi-telephone-fill"> </i>
                          </div>
                          <div>
                            <i className="icons bi bi-cart-fill"> </i>
                          </div>
                          <div>
                            <i className="icons bi bi-heart-fill"> </i>
                          </div>
                          <div>
                            <i className="icons bi bi-search"> </i>
                          </div>
                        </div>
                      </StyledCol>
                    ))}
                  </>
                )}
              </div>
            </>
          ))}
        </div>
      </Row>
    </Container>
  )
}

export default Exclusive
