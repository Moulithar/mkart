import React from "react"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"

const Contact = () => {
  return (
    <div>
      <Header />
      <BreadCrumb folder={"Contact us"} subfolder={"Shop / Contact Us"} />
      <div className="container mt-5">
        <h3 className="text-center">Contact Us</h3>
       <h6>
        <i class="bi bi-geo-alt-fill mx-2"></i> Multikart Demo Store, Demo
          Store India 345-659
        </h6>
       <h6>
          <i className="bi bi-telephone-fill mx-2"></i> Call Us:{" "}
          <a href="tel:123-456-7898">123-456-7898</a>
        </h6>
       <h6>
          <i className="bi bi-envelope-fill mx-2"></i> Email Us:{" "}
          <a href="mailto:support@fiot.com">support@fiot.com</a>
        </h6>
       <h6>
          <i class="bi bi-printer mx-2"></i> Fax: 123456
        </h6>

        {/* Embedding a map using iframe */}
        <div className="mt-5">

          <iframe
            title="Google Map"
            width="100%"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5378.578747271076!2d-122.34927700000001!3d4
            7.620506!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!
            5e0!3m2!1sen!2sus!4v1709103457597!5m2!1sen!2sus`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Contact
