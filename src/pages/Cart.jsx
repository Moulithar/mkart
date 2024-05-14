import React from "react"
import { Container } from "react-bootstrap"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import EmptyCart from "./assets/styles/icon-empty-cart.png"

const Cart = () => {
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Cart"} subfolder={"Shop / Cart"} />
      <Container className="py-5" style={{
        display: "grid",
        placeItems: 'center'
      }}>
        <img src={EmptyCart} alt="emptycarticon" className="img-fluid" />
        <div className="secondary-header py-3">Your Cart is Empty</div>
        <p>Add Something To Make Me Happy :)</p>
      </Container>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Cart
