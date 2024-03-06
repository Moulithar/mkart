import React from "react"
import { Col, Popover, Row } from "react-bootstrap"
import styled from "styled-components"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import image1 from "./assets/styles/1.jpg"
import image2 from "./assets/styles/2.jpg"
import image3 from "./assets/styles/3.jpg"
import image4 from "./assets/styles/4.jpg"
import image5 from "./assets/styles/5.jpg"

import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Button from "react-bootstrap/Button"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"
import MkModal from "../components/Modal/Modal"

const StyledSeperator = styled.div`
  height: 100%;
  background-color: #000;
  width: 1px;
`
const Seperator = styled.div`
  width: 200px;
  height: 100%;
  background-color: #ddd;
  ::after {
    content: "qasq";
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
  }
`
const blogData = [
  {
    id: 1,
    image: image1,
    date: "25 JANUARY 2018",
    title:
      "you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description:
      "Consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Lana rhodes" },
      { id: 2, user: "Leah Gotti" },
    ],
    comments: [
      {
        id: 1,
        user: "John Doe",
        description: "This is an insightful comment. It really makes you think about the nature of pleasure and pain.",
      },
      {
        id: 2,
        user: "Jane Smith",
        description: "I agree with John. It's interesting how pleasure and pain are intertwined.",
      },
    ],
  },
  {
    id: 2,
    image: image2,
    date: "12 FEBRUARY 2018",
    title:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Riley Reid" },
      { id: 2, user: "Mia Malkova" },
    ],
    comments: [
      { id: 1, user: "Alice Johnson", description: "I found this post to be very thought-provoking. It challenges common notions of pleasure and pain." },
      { id: 2, user: "Bob Smith", description: "Great post! It really makes you reconsider your perspective on pleasure and pain." },
    ],
  },
  {
    id: 3,
    image: image3,
    date: "5 MARCH 2018",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Tori Black" },
      { id: 2, user: "Sasha Grey" },
    ],
    comments: [
      { id: 1, user: "Charlie Brown", image: "https://picsum.photos/150/150", description: "Interesting read! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { id: 2, user: "Lucy Smith", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    ],
  },
  {
    id: 4,
    image: image4,
    date: "20 APRIL 2018",
    title:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Jada Stevens" },
      { id: 2, user: "Tori Black" },
    ],
    comments: [
      { id: 1, user: "David Johnson", description: "This post really resonated with me. It captures the essence of the human experience in a profound way." },
      { id: 2, user: "Emily Wilson", description: "I enjoyed reading this! It offers a fresh perspective on an age-old question." },
    ],
  },
  {
    id: 5,
    image: image5,
    date: "10 MAY 2018",
    title:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Karlee grey" },
      { id: 2, user: "Kendra spade" },
    ],
    comments: [
      { id: 1, user: "Oliver Thompson", description: "Fantastic read! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
      { id: 2, user: "Sophia Johnson", description: "Brilliant post! Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    ],
  },
  {
    id: 6,
    image: image1,
    date: "10 MAY 2018",
    title:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born",
    description:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.",
    postedby: "Admin Admin",
    likes: [
      { id: 1, user: "Monique Alexander" },
      { id: 2, user: "Kendra spade" },
    ],
    comments: [
      { id: 1, user: "William Miller", image: "https://picsum.photos/150/150", description: "Great insights! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: "2024-02-28T08:00:00.000Z" },
      { id: 2, user: "Emily Jones", image: "https://picsum.photos/151/150", description: "I found this post to be very enlightening. It sheds light on a complex topic in a clear and concise manner.", createdAt: "2024-02-27T08:00:00.000Z" },
      { id: 3, user: "Daniel Smith", image: "https://picsum.photos/152/150", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: "2024-02-26T08:00:00.000Z" },
      { id: 4, user: "Emma Brown", image: "https://picsum.photos/150/151", description: "This post offers a fresh perspective on an age-old question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", createdAt: "2024-02-25T08:00:00.000Z" },
      { id: 5, user: "Michael Johnson", image: "https://picsum.photos/150/152", description: "Fantastic read! It really makes you think about the nature of pleasure and pain.", createdAt: "2024-02-24T08:00:00.000Z" },
      { id: 6, user: "Sophie Wilson", image: "https://picsum.photos/153/150", description: "Great job! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", createdAt: "2024-02-23T08:00:00.000Z" },
      { id: 7, user: "Ethan Thompson", image: "https://picsum.photos/150/153", description: "This post resonated with me on a deep level. Lorem ipsum dolor sit amet, consectetur adipiscing elit.", createdAt: "2024-02-22T08:00:00.000Z" },
    ]
    
  
  },
];

const Blog = () => {
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Blogs"} />

      <div className="py-5 container">
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
          const popover = props => (
            <Popover id="button-tooltip" {...props}>
              <Popover.Header>Commented Users</Popover.Header>
              <Popover.Body className="p-3">
                {data?.comments.slice(-5).map((data, index) => {
                  return (
                    <div>
                      <li className="text-start">
                        {JSON.stringify(data?.user)}
                      </li>
                    </div>
                  )
                })}

                {data?.comments.length > 5 && (
                  <div
                    className="text-start text-capitalize text-orange cursor-pointer"
                    onClick={() => setModalShow(true)}
                  >
                  +{data?.comments.length - 5} more
                  </div>
                )}
                   <div
                    className="text-start text-capitalize text-orange cursor-pointer"
                    onClick={() => setModalShow(true)}
                  >
                    see all comments...
                  </div>
              </Popover.Body>
              <MkModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                heading={"Comments"}
                body={data?.comments}
              />
            </Popover>
          )
          const popover2 = props => (
            <Popover id="button-tooltip" {...props}>
              <Popover.Header>Liked Users</Popover.Header>
              <Popover.Body className="p-3">
                {data?.likes.slice(-5).map((data, index) => {
                  return (
                    <div>
                      <li className="text-start">
                        {JSON.stringify(data?.user)}
                      </li>
                    </div>
                  )
                })}

                {data?.likes.length > 5 && (
                  <div
                    className="text-start text-capitalize text-orange cursor-pointer"
                    onClick={() => {
                      alert("whbfkb")
                    }}
                  >
                    see +{data?.likes.length - 5} likes...`
                  </div>
                )}
              </Popover.Body>
            </Popover>
          )

          return (
            <Row key={index} className="py-5">
              <Col lg={6} className="">
                <img src={data?.image} className="img-fluid" alt="" />
              </Col>
              <Col lg={6} className=" d-flex align-items-center flex-wrap">
                <div>
                  <h6 className="text-orange">{data?.date}</h6>
                  <h4 className="mb-2">{data?.title}</h4>
                  <div className="d-flex align-items-center justify-content-start gap-3 mb-3 flex-wrap">
                    <p>posted by: {data?.postedby}</p>
                    <StyledSeperator />

                    {/* <Seperator /> */}
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover2}
                      rootClose={true}
                    >
                      <div className="d-flex gap-2 cursor-pointer">
                        <i className="icons bi bi-heart-fill"> </i>
                        <p className="cursor-pointer">
                          {data?.likes.length} Hits
                        </p>
                      </div>
                    </OverlayTrigger>

                    {/* <StyledSeperator /> */}

                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={popover}
                      rootClose={true}
                    >
                      <div className="d-flex gap-2 cursor-pointer">
                        <i class="bi bi-chat"></i>
                        <p className="">{data?.comments.length} Comments</p>
                      </div>
                    </OverlayTrigger>
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
