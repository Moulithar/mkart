import React from "react"
import { Col, Row } from "react-bootstrap"
import styled from "styled-components"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import image1 from "./assets/styles/1.jpg";
import image2 from "./assets/styles/2.jpg";
import image3 from "./assets/styles/3.jpg";
import image4 from "./assets/styles/4.jpg";
import image5 from "./assets/styles/5.jpg";

import BreadCrumb from "../components/BreadCrumb/BreadCrumb"

const styledSeperator = styled.div`
  height: 100px;
  background-color: #777777;
  width: 1px;
  border: 2px solid green;
`
const blogData = [
  {
    id: 1,
    image: image1,
    date: "25 JANUARY 2018",
    title: "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description:
      "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Lana rhodes", },
      { id: 2, user: "Leah Gotti", },
    ],
    comments: [
      { id: 1, user: "Abigail Mac", decsription : "some example comment by a user"},
      { id: 2,user: "Karlee grey", decsription : "some example comment by a another user"},
    ]
  },
  {
    id: 2,
    image: image2,
    date: "12 FEBRUARY 2018",
    title: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Riley Reid" },
      { id: 2, user: "Mia Malkova" },
    ],
    comments: [
      { id: 1, user: "Eva Lovia", description: "Awesome post!" },
      { id: 2, user: "Nicole Aniston", description: "Great content, keep it up!" },
    ]
  },
  {
    id: 3,
    image: image3,
    date: "5 MARCH 2018",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Tori Black" },
      { id: 2, user: "Sasha Grey" },
    ],
    comments: [
      { id: 1, user: "Jenna Jameson", description: "Nice post!" },
      { id: 2, user: "Misty Stone", description: "Keep it up!" },
    ]
  },
  {
    id: 4,
    image: image4,
    date: "20 APRIL 2018",
    title: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Jada Stevens" },
      { id: 2, user: "Tori Black" },
    ],
    comments: [
      { id: 1, user: "Kendra Lust", description: "Amazing!" },
      { id: 2, user: "Alexis Texas", description: "Great job!" },
    ]
  },
  {
    id: 5,
    image: image5,
    date: "10 MAY 2018",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Karlee grey" },
      { id: 2, user: "Kendra spade" },
    ],
    comments: [
      { id: 1, user: "Madison Ivy", description: "Fantastic!" },
      { id: 2, user: "Gianna Michaels", description: "Brilliant post!" },
    ]
  },
  {
    id: 6,
    image: image5,
    date: "10 MAY 2018",
    title: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Monique Alexander" },
      { id: 2, user: "Kendra spade" },
    ],
    comments: [
      { id: 1, user: "Madison Ivy", description: "Fantastic!" },
      { id: 2, user: "Eliza ibarra", description: "Brilliant post!" },
    ]
  }
];
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
