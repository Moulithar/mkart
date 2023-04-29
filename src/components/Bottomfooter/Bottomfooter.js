import React from "react";
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import logo from "./assets/styles/logo.png";
import img1 from "./assets/styles/img1.png";
import img2 from "./assets/styles/img2.png";
import img3 from "./assets/styles/img3.png";
import img4 from "./assets/styles/img4.png";
import img5 from "./assets/styles/img5.png";
import "./assets/styles/index.css";

const Bottomfooter = ()=>
{
    return(
        <>
            <div className="bottomfooter">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <p> 2022-23 mkartpowered by pixelstrap</p>
                        </Col>
                       
                        <Col lg={6} className="d-flex justify-content-end gap-2">
                            <img src={img1} alt="" className="bfimg" />
                            <img src={img2} alt="" className="bfimg" />
                            <img src={img3} alt="" className="bfimg" />
                            <img src={img4} alt="" className="bfimg" />
                            <img src={img5} alt="" className="bfimg" />
                           
                            
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
export default Bottomfooter