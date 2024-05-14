import React from "react"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"

import { Container } from "react-bootstrap"
import emptySearch from "./assets/styles/empty-search.jpg"
const Search = () => {
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Search"} subfolder={"Features / Search"} />
      <Container style={{display: "grid", placeItems: "center"}} className="p-lg-5 p-4">
        <input placeholder="Search a product"
        className=""
        style={{
            borderBottom: "2px solid #777777",
            borderTop: "transparent",
            borderInline: "transparent",
            fontSize: "24px"
        }}>
        
        </input>

      <img src={emptySearch} alt="empty-search" className="img-fluid" />
      <p className="secondary-header" style={{
        letterSpacing: "0.1em"
      }}> Sorry! Couldn't find the product you were looking For!!!</p>
      <p>Please check if you have misspelt something or try searching with other words.</p>
      </Container>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Search
