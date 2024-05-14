import React from "react"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
// import images1 from "./assets/images/1.jpg";
import dayjs from "dayjs"
import "./assets/style/index.css"

const Special = () => {
  return (
    <>
      <div className="special">
        <Container>
          <Row>
            <Col lg={6}>
              <div ClassName="">
                <span>
                  <h1>{dayjs().year()}</h1>
                </span>
                <h1>fashion trends</h1>
                <h2>special offer</h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Special
