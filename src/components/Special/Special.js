import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
// import images1 from "./assets/images/1.jpg";
import "./assets/style/index.css"
import dayjs from "dayjs"

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
