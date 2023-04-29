import React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerimg from "../../images/banner.jpg";
import bannersecond from "../../images/banner-black.jpg";
import "./assets/styles/index.css";

const Owl= ()=>

{
    var settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return(
        <>
        <section className="slider-banner">
            <Slider {...settings}>
                {/* <div>
                    <div className="bannerimg"></div>
                </div> */}
                <div>
                    <img src={bannerimg} />
                    <div className="content">
                    <h2>welcome to fashion</h2>
                    <h4>men fashion</h4>
                  
                    </div>
                </div>
                <div>
                    <img src={bannersecond} />
                    <div className="content">
                   <h2> welcome to fashion</h2>
                    <h4>women fashion</h4>
                    </div>
                </div>
                <div>
                    <img src={bannerimg} />
                    <div className="content">
                    <h2>welcome to fashion</h2>
                    <h4>men fashion</h4>
                  
                    </div>
                </div>
                <div>
                    <img src={bannersecond} />
                    <div className="content">
                   <h2> welcome to fashion</h2>
                    <h4>women fashion</h4>
                    </div>
                </div>
                <div>
                    {/* <img src={bannerimg} />
                    <div className="content">
                    <h2>welcome </h2>
                    <h4>fashion</h4>
                  
                    </div>
                </div>
                <div>
                    <img src={bannersecond} />
                    <div className="content">
                   <h2> Qertrtycome four</h2>
                    <h4>women dreamon</h4>
            </div> */}
                </div> 
            </Slider>
        </section>
        </>
     
    );
}

export default Owl;