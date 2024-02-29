import React from "react"
import Header from "../components/Header/Header"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import { Accordion, Container } from "react-bootstrap"

const Search = () => {
  const AccordionData = [
    {
      title: "How can I upgrade from version?",
      description:
        "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures",
    },
    {
      title: "Under what license are Regular Labs extensions released?",
      description:
        "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures",
    },
    {
      title: "How can I upgrade from version?",
      description:
        "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures",
    },
    {
      title: "Under what license are Regular Labs extensions released?",
      description:
        "it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures",
    },
  ]

  return (
    <div>
      <Header />
      <BreadCrumb folder={"Blogs"} />
      <Container className="p-5">
        {AccordionData.map((data, index) => {
          return (
            <Accordion defaultActiveKey={index == 0 ? " " : ["0"]} alwaysOpen style={{
                marginBottom: "20px",
                boxShadow: "none !important",
                outline: "none"
           
            }}>
              <Accordion.Item  eventKey="0">
                <Accordion.Header style={{outline: "none", boxShadow: "none"}}>{data?.title}</Accordion.Header>
                <Accordion.Body className="text-light-grey">{data?.description}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )
        })}
      </Container>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Search
