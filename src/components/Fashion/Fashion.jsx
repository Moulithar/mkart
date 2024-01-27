import React, { useRef } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { fashion1 } from "../Fashion/assets/images/1.jpg"
import { fashion2 } from "../Fashion/assets/images/2.jpg"
import { fashion3 } from "../Fashion/assets/images/3.jpg"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowLeft,
  faArrowRight,
  faCoffee,
  faRightLeft,
} from "@fortawesome/free-solid-svg-icons"
import "./assets/styles/style.css"

const data = [
  {
    id: 1,
    value: 1,
    date: "25 January",
    description: "Fun Fashion Clothing and Ideas for Valentine’s Day",
    author: "John Dio , 2 Comment",
  },
  {
    id: 2,
    value: 2,
    date: "28 January",
    description: "Discover the Latest Trends in Home Decor during covid",
    author: "Alice Smith, 5 Comments",
  },
  {
    id: 3,
    value: 3,
    date: "2 February",
    description: "Healthy Recipes for a New Year, New You and like wise",
    author: "Ethan Johnson, 10 Comments",
  },
  {
    id: 4,
    value: 4,
    date: "7 February",
    description: "Exploring Adventure Travel Destinations and many more",
    author: "Olivia White, 8 Comments",
  },
  {
    id: 5,
    value: 5,
    date: "12 February",
    description: "DIY Craft Ideas for a Creative and a happy weekened",
    author: "David Brown, 3 Comments",
  },
]

const Fashion = () => {
  const sliderRef = useRef(null)

  const prevArrowRef = useRef(null)
  const nextArrowRef = useRef(null)

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={() => {
        onClick()
      }}
      ref={prevArrowRef}
      style={{ cursor: "pointer" }}
    >
      Prev
    </div>
  )

  const NextArrow = ({ onClick }) => (
    <div
      onClick={() => {
        onClick()
      }}
      ref={nextArrowRef}
      style={{ cursor: "pointer" }}
    >
      Next
    </div>
  )

  var settings = {
    dots: false,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    prevArrow: <PrevArrow onClick={() => sliderRef.current.slickPrev()} />,
    nextArrow: <NextArrow onClick={() => sliderRef.current.slickNext()} />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  }

  return (
    <Container className="text-center my-5 ">
      <div>
        <span>
          <h6 className="text-center">From The Blog </h6>
          <h3>FASHION FOR YOU</h3>
        </span>
      </div>

      <Row className=" mkart-slider position-relative">
        <div
          className="d-flex justify-content-between align-items-center position-absolute"
          style={{
            top: "25%",
            zIndex: 99,
            paddingInline: "50px",
          }}
        >
          <div
            className="show"
            style={{
              backgroundColor: "#ffffff8b",
              padding: "10px 15px",
              borderRadius: "50%",
              backdropFilter: "blur(5px)", // Blur effect
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ff5141" }} />
          </div>
          <div
            className="show"
            style={{
              backgroundColor: "#ffffff8b",
              padding: "10px 15px",
              borderRadius: "50%",
              backdropFilter: "blur(5px)", // Blur effect
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ff5141" }} />
          </div>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {data.map((data, index) => {
            return (
              <Col lg={4} className="p-2">
                <img
                  src={`https://themes.pixelstrap.com/multikart/assets/images/blog/${data?.value}.jpg`}
                />
                <span>
                  <h6
                    style={{
                      paddingTop: "20px",
                    }}
                    className="text-capitalize"
                  >
                    {data?.date}
                  </h6>
                </span>

                <h6 className="m-0 p-0 text-capitalize">{data?.description}</h6>
                <div className="d-flex justify-content-center my-3">
                  <div
                    style={{
                      width: "20%",
                      height: "2px",
                      backgroundColor: "#FF5141",
                    }}
                  ></div>
                </div>

                <p>by: {data?.author}</p>
              </Col>
            )
          })}
        </Slider>
      </Row>
    </Container>
  )
}

export default Fashion
