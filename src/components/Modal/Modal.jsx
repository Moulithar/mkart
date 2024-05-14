import React from "react"; // Import React
import Modal from "react-bootstrap/Modal"
import MkBtn from "../MkBtn/MkBtn"

function MkModal({ onHide, heading, body, ...props }) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{
        zIndex: 99999,
      height: "auto"
      }}
    >
      <Modal.Header className="d-flex justify-content-between" >
        <Modal.Title id="contained-modal-title-vcenter">{heading}</Modal.Title>
        <div onClick={onHide} style={{cursor: "pointer"}}>

        <i class="bi bi-x-lg fw-bolder"></i>
        </div>
      </Modal.Header>
      <Modal.Body style={{
        height: "70vh",
        overflowY: "scroll"
      }}>
        {body?.map((comment, index) => (
          <div key={index} style={{  borderRadius: "10px",
          border: "2px solid #777777" , marginBlockEnd: "10px", padding: "10px", overflow: 'hidden'}}>
            <div className="d-flex align-items-center gap-2 border-bottom py-2">
              <img
                src={comment?.image || "https://picsum.photos/150/150"}
                alt=""
                className="rounded-circle"
                style={{width: "35px"}}
              />
              <h5 className="text-light-grey text-capitalize m-0">{comment.user}</h5>
              <p>posted an {Math.floor(Math.random( )* 30)+ 1 } days ago</p>
            </div>
            <p className="py-3">{comment.description}</p>
          </div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <MkBtn onClick={onHide} label={"Close"}></MkBtn>
      </Modal.Footer>
    </Modal>
  )
}

export default MkModal
