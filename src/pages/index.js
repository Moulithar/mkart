import * as React from "react";
import "../components/Style/global.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Offer from "../components/Offer/Offer";
import Special from "../components/Special/Special";
import Mainfooter from"../components/Mainfooter/Mainfooter";
import Bottomfooter from"../components/Bottomfooter/Bottomfooter";
import "./assets/styles/index.css";
import "../components/Style/icon.css";

const IndexPage = () => 
{
  return (
    <>
    <Header />
    <Banner />
    <Offer />
    <Special />
    <Mainfooter />
    <Bottomfooter />
    </>
  );
}

export default IndexPage
