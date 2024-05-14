import "bootstrap-icons/font/bootstrap-icons.css"
import React from "react"
import Banner from "../components/Banner/Banner"
import Exclusive from "../components/Exclusive/Exclusive"
import Fashion from "../components/Fashion/Fashion"
import Marquee from "../components/Marquee/Marquee"
import Offer from "../components/Offer/Offer"
import Owl from "../components/Owl/Owl"
import Special from "../components/Special/Special"
import "../components/Style/global.css"
import "../components/Style/icon.css"
import "./assets/styles/index.css"

const HomePage = () => {
  return (
    <>
      <Owl />
      <Banner />
      <Exclusive />
      <Fashion />
      <Marquee />
      <Offer />
      <Special />
    </>
  )
}

export default HomePage
