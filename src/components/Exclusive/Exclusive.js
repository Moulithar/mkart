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
import StarRatings from "../StarRatings/StarRatings"

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
  .hover-icons > div {
    visibility: hidden;
    opacity: 0;
  }
  &:hover {
    .hover-icons > div {
      animation: ${fadeIn} 0.5s ease forwards;
      &:nth-child(1) {
        animation-delay: 0.2s;
        visibility: visible;
        opacity: 1;
      }
      &:nth-child(2) {
        animation-delay: 0.4s;
        visibility: visible;
        opacity: 1;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
        visibility: visible;
        opacity: 1;
      }
      &:nth-child(4) {
        animation-delay: 0.8s;
        visibility: visible;
        opacity: 1;
      }
    }
  }
  .hover-icons {
    position: absolute;
    visibility: hidden;
    opacity: 1;
    bottom: 20%;
    right: 7%;
    transition: all ease 0.8s;

    &:hover > div {
      animation: none; // Reset animation on hover
      /* animation-play-state: running; */
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
      starRating: "0.5",
      discount: "30.00",
      name: "Maxi Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "75.00",
      starRating: "2",
      discount: "15.00",
      name: "Fit-flare Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion6,
      cost: "180.00",
      starRating: "4",
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
      img: fashion7,
      cost: "130.00",
      starRating: "4",
      discount: "50.00",
      name: "Printed Blouse",
      new: true,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "110.00",
      starRating: "3.5",
      discount: "55.00",
      name: "Denim Jacket",
      new: false,
      onSale: true,
    },
    {
      img: fashion3,
      cost: "95.00",
      starRating: "4.5",
      discount: "20.00",
      name: "Floral Skirt",
      new: true,
      onSale: true,
    },
    {
      img: fashion1,
      cost: "180.00",
      starRating: "5",
      discount: "90.00",
      name: "Striped Trousers",
      new: false,
      onSale: false,
    },
    {
      img: fashion4,
      cost: "70.00",
      starRating: "4",
      discount: "15.00",
      name: "Leather Boots",
      new: true,
      onSale: false,
    },
    {
      img: fashion6,
      cost: "160.00",
      starRating: "3",
      discount: "40.00",
      name: "Sunglasses",
      new: true,
      onSale: true,
    },
    {
      img: fashion2,
      cost: "85.00",
      starRating: "4.5",
      discount: "30.00",
      name: "Casual Hat",
      new: false,
      onSale: false,
    },
    {
      img: fashion8,
      cost: "145.00",
      starRating: "5",
      discount: "72.00",
      name: "Backpack",
      new: true,
      onSale: true,
    },
  ]
  const data3 = [
    {
      img: fashion3,
      cost: "130.00",
      starRating: "4",
      discount: "50.00",
      name: "Sporty Sneakers",
      new: true,
      onSale: false,
    },
    {
      img: fashion2,
      cost: "110.00",
      starRating: "3.5",
      discount: "55.00",
      name: "Running Shorts",
      new: false,
      onSale: true,
    },
    {
      img: fashion1,
      cost: "95.00",
      starRating: "4.5",
      discount: "20.00",
      name: "Hooded Sweatshirt",
      new: true,
      onSale: true,
    },
    {
      img: fashion4,
      cost: "180.00",
      starRating: "5",
      discount: "90.00",
      name: "Yoga Leggings",
      new: false,
      onSale: false,
    },
    {
      img: fashion6,
      cost: "70.00",
      starRating: "4",
      discount: "15.00",
      name: "Gym Duffel Bag",
      new: true,
      onSale: false,
    },
    {
      img: fashion7,
      cost: "160.00",
      starRating: "3",
      discount: "40.00",
      name: "Water Bottle",
      new: true,
      onSale: true,
    },
    {
      img: fashion5,
      cost: "85.00",
      starRating: "4.5",
      discount: "30.00",
      name: "Fitness Tracker",
      new: false,
      onSale: false,
    },
    {
      img: fashion8,
      cost: "145.00",
      starRating: "5",
      discount: "72.00",
      name: "Training Gloves",
      new: true,
      onSale: true,
    },
  ]
  const data4 = [
    {
      img: fashion8,
      cost: "130.00",
      starRating: "4",
      discount: "50.00",
      name: "Floral Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion6,
      cost: "110.00",
      starRating: "3.5",
      discount: "55.00",
      name: "Summer Dress",
      new: false,
      onSale: true,
    },
    {
      img: fashion3,
      cost: "95.00",
      starRating: "4.5",
      discount: "20.00",
      name: "A-line Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion1,
      cost: "180.00",
      starRating: "5",
      discount: "90.00",
      name: "Cocktail Dress",
      new: false,
      onSale: false,
    },
    {
      img: fashion5,
      cost: "70.00",
      starRating: "4",
      discount: "15.00",
      name: "Printed Dress",
      new: true,
      onSale: false,
    },
    {
      img: fashion7,
      cost: "160.00",
      starRating: "3",
      discount: "40.00",
      name: "Ruffle Dress",
      new: true,
      onSale: true,
    },
    {
      img: fashion2,
      cost: "85.00",
      starRating: "4.5",
      discount: "30.00",
      name: "Wrap Dress",
      new: false,
      onSale: false,
    },
    {
      img: fashion4,
      cost: "145.00",
      starRating: "5",
      discount: "72.00",
      name: "Sleeveless Dress",
      new: true,
      onSale: true,
    },
  ]

  const tabsData = [
    {
      key: "first",
      label: "Best Seller",
      content: data1,
    },
    {
      key: "second",
      label: "Featured products",
      content: data2,
    },
    {
      key: "third",
      label: "New arrival",
      content: data3,
    },
    {
      key: "fourth",
      label: "On sale",
      content: data4,
    },
  ]
  const [activeTab, setActiveTab] = useState(tabsData[0].key)

  const handleTabSelect = selectedKey => {
    setActiveTab(selectedKey)
  }
  return (
    <Container className="">
      <Row>
        <div className="text-center">
          <span>
            <h6> Exclusive Products</h6>
          </span>
          <h3>SPECIAL PRODUCTS</h3>
        </div>
        <Tab.Container
          id="my-tabs"
          defaultActiveKey={activeTab}
          onSelect={handleTabSelect}
        >
          <Row>
            <Col xs={12}>
              <Nav
                variant="pills"
                className="d-flex justify-content-center flex-wrap"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                {tabsData.map(tab => (
                  <Nav.Item
                    key={tab.key}
                    style={{ width: "max-content" }}
                    className="d-flex justify-content-center"
                  >
                    <Nav.Link
                      eventKey={tab.key}
                      style={{
                        backgroundColor: "transparent",
                        color: activeTab === tab.key ? "#FF5141" : "#000",
                      }}
                    >
                      {tab.label}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
            </Col>
          </Row>
          <Tab.Content>
            {tabsData.map(tab => (
              <Tab.Pane key={tab.key} eventKey={tab.key} className="">
                <Row>
                  {tab.content.map((data, index) => (
                    <StyledCol lg={3} xs={6} key={index} className="g-4">
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
                      <StarRatings value={data?.starRating}></StarRatings>
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
                </Row>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Row>
    </Container>
  )
}

export default Exclusive
