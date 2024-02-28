import React from "react"
import Slider from "react-slick"
import { Container, Row, Col } from "react-bootstrap"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import bannerimg from "../../images/banner.jpg"
import bannersecond from "../../images/banner-black.jpg"
import "./assets/styles/index.css"
import MkBtn from "../MkBtn/MkBtn"

const Owl = () => {
  var settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }

  return (
    <>
      <section className=" position-relative slider">
        <Slider {...settings}>
          <div className=" d-flex align-items-center ">
            <img src={bannerimg} style={{
              
            }}/>
            <div className="content">
              <div className="d-flex  flex-column align-items-center justify-content-center">
              <div className=" secondary-header text-light-grey">
                welcome to fashion
              </div>
              <div className="primary-header fw-bold">men fashion</div>
                <MkBtn label={"Shop Now"} />
              </div>
            </div>
          </div>
          <div>
          <div className=" d-flex align-items-center ">

            <img src={bannersecond} />
         
            <div className="content">
            <div className="d-flex  flex-column align-items-center justify-content-center">

              <h2 className="text-light-grey secondary-header">
                {" "}
                welcome to fashion
              </h2>
              <div className=" primary-header fw-bold">women fashion</div>
              <MkBtn label={"Shop Now"} />
            </div>
            </div>
            </div>
          </div>
        </Slider>
      </section>
    </>
  )
}

export default Owl
