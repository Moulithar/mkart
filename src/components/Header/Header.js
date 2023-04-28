import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./assets/images/logo.png";
import "./assets/styles/index.css";


const Header = ()=>
{
    return(
      <>
      <div className="header-top ">
        <Container>
          <Row>
          <div className="d-flex justify-content-start align-items-center gap-5 left-header-top">
            <p>welcome to our store multicart</p>
            <p><i className="icons bi bi-telephone-fill"> &nbsp; </i>Call Us: 123 - 456 - 7890</p>
          </div> 
          </Row>
          <Row>
          <div className="d-flex justify-content-end align-items-center gap-5 right-header-top">
            <p><i className="icons bi bi-heart-fill"></i> &nbsp; wishlist</p>
            <p><i className=" icons bi bi-person-fill"> &nbsp; </i> account</p>
          </div>
          </Row>  
        </Container>
      </div>

      <div className="header-bottom">
        <Container>
        <Navbar expand="lg" className="navbar">
        <Container fluid>
        <Navbar.Brand href="#">
            <img src={logo} className="logo" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
             <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">HOME</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
            </Nav.Link>
            <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">shop</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
            </Nav.Link>
            <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">products</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
            </Nav.Link>
            <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">features</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
            </Nav.Link>            
            <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">pages</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
            </Nav.Link>
            <Nav.Link className="navitems" href="#action2">
              <div className="dropdown">
              <button className="dropbtn">blogs</button>
                <div className="dropdown-content">
                          <ul>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                            <li><a className="fromleft" href="" > clothing</a></li>
                            <li><a className="fromleft" href="" > accesories</a></li>
                            <li><a className="fromleft" href="" > women</a></li>
                          </ul>  
                    </div>
                </div>
               
            </Nav.Link>
            
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </Container>
      </div>
      
      
      </>
    
  );
}
export default Header