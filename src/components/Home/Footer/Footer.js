import React from "react";
import "./Footer.scss";
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>About</h4>
            <p>
              This letter is an express my interest in the job posted on your
              website for an experienced, front-end web developer. As you can
              see, I have two years of hands-on experience efficiently coding
              websites and applications using modern HTML, CSS, and Javascript,
              React js.
            </p>
          </div>
          <div className="col-md-3 ">
            <div className="Services">
              <h4>Navagation</h4>
              <p>React Js</p>
              <p>Javascript</p>
              <p>Node Js</p>
              <p>jQuery</p>
              <p>Bootstrap</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="Services">
              <h4>Services</h4>
              <p>Web Design</p>
              <p>eCommerce</p>
              <p>Frontend</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <h4>Contact Info</h4>
              <p>43 Raymouth Rd. Baltemoer, London 3910</p>
              <p>+880-1862-678333</p>
              <p>+880-1306-649925</p>
              <p>rubelahme@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>
            Copyright © {date.getFullYear()} All rights reserved | This template
            is made with by Colorlib
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
