import React from "react"
import { Container } from "react-bootstrap"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import aboutBanner from "../images/about-main.jpg"

const AboutPage = () => {
  return (
    <div className=" ">
      <Header />
<BreadCrumb folder={"About"} subfolder={""}/>
      <div className=" py-5 d-flex align-items-center justify-content-center container h-100">
        <img src={aboutBanner} alt="" className="img-fluid" />
      </div>
      <Container
    className="pb-5"
      >
        <h3 className="text-center">About</h3>
        <h6>
          <strong>
            Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            Accusantium Doloremque Laudantium
          </strong>
        </h6>
        <p style={{letterSpacing: ".03em", lineHeight: "2"}}>
          Donec vitae sapien ut libero venenatis faucibus. Nullam quis
          ante.Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
          fringilla mauris sit amet nibh. Donec sodales sagittis magna.
          Sedconsequat, leo eget bibendum sodales, augue velit cursus nunc,
          quisgravida magna mi a libero. Fusce vulputate eleifend sapien.
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
          Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi.
          Curabitur ligula sapien, tincidunt non, euismod vitae, posuere
          imperdiet, leo. Maecenas malesuada. Praesent congue erat at massa. Sed
          cursus turpis vitae tortor. Donec posuere vulputate arcu. Phasellus
          accumsan cursus velit. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis
          porttitor congue, elit erat euismod orci, ac placerat dolor lectus
          quis orci. Phasellus consectetuer vestibulum elit. Aenean tellus
          metus, bibendum sed, posuere ac, mattis non, nunc.
        </p>
      </Container>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default AboutPage
