import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Container } from "react-bootstrap"

const BreadCrumb = ({ folder, subfolder }) => {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#e8e8e8",
        padding: "30px 0",
      }}
    >
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex gap-2">
            {/* <img src={favi} alt="favi" className="" /> */}
        <FontAwesomeIcon icon={faChevronRight} />


        <h6 className="fw-bold m-0">{folder}</h6>
        </div>
      <h6 className="fw-light m-0" style={{
        whiteSpace: "nowrap"
      }}>{subfolder}</h6>
      </Container>

    </div>
  )
}

export default BreadCrumb
