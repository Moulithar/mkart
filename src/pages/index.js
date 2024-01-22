import * as React from "react"
import "../components/Style/global.css"
import Header from "../components/Header/Header"
import Owl from "../components/Owl/Owl"
import Banner from "../components/Banner/Banner"
import Exclusive from "../components/Exclusive/Exclusive"
import Offer from "../components/Offer/Offer"
import Special from "../components/Special/Special"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import $ from "jquery"
import "bootstrap-icons/font/bootstrap-icons.css"
import "./assets/styles/index.css"
import "../components/Style/icon.css"

const IndexPage = () => {
  return (
    <>
      <Header />
      <Owl />
      <Banner />
      <Exclusive />
      <Offer />
      <Special />
      <Mainfooter />
      <Bottomfooter />
    </>
  )
}

export default IndexPage
