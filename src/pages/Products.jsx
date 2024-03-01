import React from "react"
import Header from "../components/Header/Header"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import { Button, Col, Container, Row, Stack } from "react-bootstrap"
import product1 from "./assets/styles/product1.jpg"
import product2 from "./assets/styles/product2.jpg"
import product3 from "./assets/styles/product3.jpg"
import product4 from "./assets/styles/product4.jpg"
import product5 from "./assets/styles/product5.jpg"
import product6 from "./assets/styles/product6.jpg"
import product7 from "./assets/styles/product7.jpg"
import product8 from "./assets/styles/product8.jpg"


const ProductsData = [
    { image: product1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 20 },
    { image: product2, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 15 },
    { image: product3, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 28 },
    { image: product4, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 7 },
    { image: product5, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 25 },
    { image: product6, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 10 },
    { image: product7, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 18 },
    { image: product8, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", products: 13 },
];


const Products = () => {
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Products"} subfolder={"Shop / Products"} />
      <Container>

      <Row className="py-5 text-center ">
      {ProductsData.map((product, index) => {
        return (
            <Col lg={3} className="gx-3 gy-5" key={index}>
                <Stack style={{
                    gap: '16px',
                    placeItems: "center"
                }}>

              <img
                src={product?.image}
                alt="product?.image"
                className="img-fluid"
              />
              <p>({product?.products}Products)</p>
             <h6 className="m-0">FASHION</h6>
              <p style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
              }}>{product?.description}</p>
              <div className="mk-btn-inverse">
                shop now ! owho def
              </div>
                </Stack>
            </Col>
        )
    })}
    </Row>
      </Container>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Products
