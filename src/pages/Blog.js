import React from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import { blogData } from "./assets/data/BlogData"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

const styledSeperator = styled.div`
  height: 100px;
  background-color: #777777;
  width: 1px;
  border: 2px solid green;
`
const Blog = () => {
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Blogs"} />

      <div
        className="py-5 container"
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <h3>Blog</h3>
        </div>
        {/* <pre>{JSON.stringify(blogData, null, 2)}</pre> */}
        {blogData.slice(-5).map((data, index) => {
          return (
            <Row key={index} className="g-5 py-5" >
              <Col lg={6} className="">
                <img src={data?.image} className="img-fluid" alt="" />
              </Col>
              <Col lg={6} className="d-flex align-items-center">
                <div>

          
                <h6 className="text-orange">{data?.date}</h6>
                <h4 className="mb-2">{data?.title}</h4>
                <div className="d-flex align-items-center justify-content-start gap-3 mb-3">
                  <p>posted by: {data?.postedby}</p>
                  <styledSeperator />
                  <i className="icons bi bi-heart-fill"> </i>
                  <p className="cursor-pointer">{data?.likes.length} Hits</p>
                  <styledSeperator />

                  <i class="bi bi-chat"></i>
                  <p>{data?.comments.length} Comments</p>
                </div>
                <p>{data?.description}</p>
                </div>
              </Col>
            </Row>
          )
        })}
      </div>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Blog
