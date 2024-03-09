import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
// import Form from 'react-bootstrap/Form';
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./assets/images/logo.png"
import dna from "../../../public/static/dna_logo.png"
import "./assets/styles/index.css"
import { Offcanvas } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowAltCircleRight,
  faArrowCircleRight,
  faArrowDown,
  faArrowUp,
  faBars,
  faCableCar,
  faChevronDown,
  faChevronRight,
  faChevronUp,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons"
import { Link, navigate } from "gatsby"

const Header = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const data = [
    { id: 1, name: "Home", link: "/" },
    {
      id: 2,
      name: "About",
      link: "/AboutPage",
    },
    {
      id: 3,
      name: "Shop",
      dropDownContent: [
        { id: 21, name: "Products", link: "Products" },
        { id: 22, name: "Cart", link: "Cart" },
        { id: 23, name: "Contact Us", link: "Contact" },
      ],
    },
    {
      id: 4,
      name: "Features",
      dropDownContent: [
        { id: 31, name: "Search", link: "Search" },
        { id: 32, name: "FAQ", link: "FAQ" },
      ],
    },

    { id: 5, name: "Blogs", link: "/Blog" },
    // Add more items as needed
  ]

  // State to manage dropdown visibility
  const [openDropdown, setOpenDropdown] = useState(null)

  // Function to toggle dropdown visibility
  const toggleDropdown = id => {
    setOpenDropdown(openDropdown === id ? null : id)
  }
  return (
    <>
      <div className="header-top ">
        <Container>
          <Row>
            <div className="d-flex justify-content-between align-items-center gap-5 left-header-top">
              <div className="d-flex gap-5">
                <p>welcome to our store multicart</p>
                <p>
                  <i className="icons bi bi-telephone-fill"> &nbsp; </i>Call Us:
                  123 - 456 - 7890
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center gap-5 ">
                <p>
                  <i className="icons bi bi-heart-fill"></i> &nbsp; wishlist
                </p>
                <p>
                  <i className=" icons bi bi-person-fill"> &nbsp; </i> account
                </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>

      <div className="header-bottom ">
        <Container>
          <Navbar expand="lg" className="navbar">
            <Container fluid>
              <Link to="/">
                <Navbar.Brand href="#">
                  <img
                    src={logo}
                    className="logo"
                    alt=""
                    style={{
                      width: "100px",
                      height: "auto",
                    }}
                  />
             
                </Navbar.Brand>
              </Link>
              {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}

              <Navbar.Collapse id="navbarScroll ">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                ></Nav>
                <Link to="/">
                  <Nav.Link className="navitems" href="#action2">
                    <div className="dropdown">
                      <button className="dropbtn">HOME</button>
                    </div>
                  </Nav.Link>
                </Link>
                <Link to="/AboutPage">
                  {" "}
                  <Nav.Link className="navitems" href="#action2">
                    <div className="dropdown">
                      <button className="dropbtn">ABOUT</button>
                    </div>
                  </Nav.Link>
                </Link>
                <Nav.Link className="navitems" href="#action2">
                  <div className="dropdown ">
                    <button className="dropbtn">shop</button>
                    <div className="dropdown-content">
                      <ul>
                        <Link to="/Products">
                          {" "}
                          <li>
                            <a className="fromleft" href="">
                              {" "}
                              Products
                            </a>
                          </li>
                        </Link>
                        <Link to="/Cart">
                          <li>
                            <a className="fromleft" href="">
                              {" "}
                              Cart
                            </a>
                          </li>
                        </Link>
                        <Link to="/Contact">
                          <li>
                            <a className="fromleft" href="">
                              {" "}
                              Contact Us
                            </a>
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </div>
                </Nav.Link>
                <Nav.Link className="navitems" href="#action2">
                  <div className="dropdown">
                    <button className="dropbtn">features</button>
                    <div className="dropdown-content">
                      <ul>
                        <Link to="/Search">
                          <li>
                            <a className="fromleft" href="">
                              {" "}
                              Search
                            </a>
                          </li>
                        </Link>
                        <li>
                          <Link to="/FAQ">
                            <a className="fromleft" href="">
                              {" "}
                              FAQ
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Nav.Link>

                <Link to="/Blog">
                  <Nav.Link className="navitems" href="#action2">
                    <div className="dropdown">
                      <button className="dropbtn">blogs</button>
                    </div>
                  </Nav.Link>
                </Link>

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
              <div
                variant=""
                onClick={handleShow}
                className="d-lg-none d-block"
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faBars} size="2x" />
              </div>
            </Container>
          </Navbar>

          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <Link to="/">
                  <Navbar.Brand href="#">
                    <img
                      src={logo}
                      className="logo h-auto"
                      alt=""
                      style={{
                        width: "100px",
                      }}
                    />
                  </Navbar.Brand>
                </Link>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="text-capitalize">
              {data.map((item, index) => (
                <>
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center"
                    onClick={() => toggleDropdown(item.id)}
                  >
                    <Link
                      to={item.link}
                      className="text-decoration-none text-dark fw-bolder my-2"
                    >
                      <h6 className="m-0">{item.name}</h6>
                    </Link>
                    {item.dropDownContent && (
                      <div
                        style={{
                          cursor: "pointer",
                          color: "#ff5141",
                          transition: "transform ease 0.3s",
                          transform:
                            openDropdown === item.id
                              ? "rotate(90deg)"
                              : "rotate(0deg)",
                        }}
                      >
                        <FontAwesomeIcon icon={faChevronRight} />
                      </div>
                    )}
                  </div>

                  {index < data.length - 1 && <hr className="m-0" />}
                  {item?.dropDownContent && openDropdown === item.id && (
                    // <Link to={data.name}>

                    <div>
                      {item?.dropDownContent.map((data, index, array) => (
                        <div
                          style={{
                            backgroundColor: "",
                            color: "#777777",
                            cursor: "pointer",
                            borderBottom:
                              index < item?.dropDownContent.length - 1
                                ? "1px solid #e6e6e6"
                                : "",
                            padding: "5px",
                          }}
                          className="d-flex justify-content-start gap-3 align-items-center"
                          key={data.id}
                          onClick={() => {
                            navigate(`/${data?.link}`)
                          }}
                        >
                          <i class="bi bi-arrow-right-short"></i> {data?.name}
                        </div>
                      ))}
                    </div>
                    // </Link>
                  )}
                </>
              ))}
            </Offcanvas.Body>
          </Offcanvas>
        </Container>
      </div>
    </>
  )
}
export default Header
