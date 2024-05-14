import "bootstrap-icons/font/bootstrap-icons.css"
import * as React from "react"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import "../components/Style/global.css"
import "../components/Style/icon.css"
import HomePage from "./HomePage"
import "./assets/styles/index.css"

const IndexPage = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Mainfooter />
      <Bottomfooter />
    </>
  )
}

export default IndexPage
