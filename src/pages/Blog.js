import React from "react"
import Header from "../components/Header/Header"
import Mainfooter from "../components/Mainfooter/Mainfooter"
import Bottomfooter from "../components/Bottomfooter/Bottomfooter"
import bannerimg from "../images/banner.jpg"

const Blog = () => {
  return (
    <div>
      <Header />

      <div
        className="py-5 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(rgba(256, 256, 256, 0.5), rgba(256, 256, 256, 0.5)), url(${bannerimg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "grid",
            placeItems: "center",
          }}
        >
          <h3>Blog</h3>

          <p
            style={{
              whiteSpace: "pre-line",
              color: '#000'
            }}
          >
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis
            ante.Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna.
            Sedconsequat, leo eget bibendum sodales, augue velit cursus nunc,
            quisgravida magna mi a libero. Fusce vulputate eleifend sapien.
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. 
            
            <br />
            <br />

            Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem
            in justo pellentesque facilisis. Etiam imperdiet imperdiet orci.
            Nunc nec neque. 
            <br />
            <br />
            Phasellus leo dolor, tempus non, auctor et,
            hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non,
            euismod vitae, posuere imperdiet, leo. Maecenas malesuada. Praesent
            congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere
            vulputate arcu. Phasellus accumsan cursus velit. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod
            orci, ac placerat dolor lectus quis orci. 
            
            Phasellus consectetuer
            vestibulum elit. Aenean tellus metus, bibendum sed, posuere ac,
            mattis non, nunc. 
          </p>
        </div>
      </div>
      <Mainfooter />
      <Bottomfooter />
    </div>
  )
}

export default Blog
