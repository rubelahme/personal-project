import React from "react";
import "./Project.scss";
import img from "../../../img/Capture1.PNG";
import img1 from "../../../img/Capture2.PNG";
import img2 from "../../../img/Capture22.PNG";
const Project = () => {
  return (
    <div className="project">
      <div className="container">
        <div id="Project">
          <h1>My Project</h1>
        </div>
        <div className="row ">
          <div className="col-md-6">
            <div>
              <img src={img} className="Mobile" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <h5>Mobile Service Center</h5>
            <p>
              <strong>Details:</strong> A single-page web application shows an
              online mobile service system. The attractive application user
              interfaces design and user authentication system Firebase as Login
              authentication(react-router). Creact admin panel, user review
              system, and show home page.
              <br />
              <br />
              <strong>Technologies:</strong> ReactJs, JavaScript, NodeJs,
              MongoDB, ExpressJs, CSS, Bootstrap, react-hook-form etc.
            </p>
            <a
              href="https://determined-poitras-8b392b.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Web View
            </a>
            <span className="ml-3">
              <a
                href="https://github.com/rubelahme/Mobile-Service-center"
                target="_blank"
                rel="noreferrer"
              >
                Client Code
              </a>
            </span>
            <span className="ml-3">
              <a
                href="https://github.com/rubelahme/Mobile-service-center-server"
                target="_blank"
                rel="noreferrer"
              >
                Server Code
              </a>
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <img src={img1} class="Mobile" alt="..." />
          </div>
          <div className="col-md-6">
            <h5>World Best Car</h5>
            <p>
              <strong>Details:</strong> A single-page web application shows an
              online Car buying system. The attractive application user
              interfaces design and user authentication system Firebase.
              <br />
              <br />
              <strong>Technologies:</strong> React Js, react-route, Bootstrap,
              firebase, react hook form, HTML5, CSS etc.
            </p>
            <a
              href="https://jovial-sinoussi-9fbca3.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Web View
            </a>
            <span className="ml-3">
              <a
                href="https://github.com/rubelahme/Mobile-Service-center"
                target="_blank"
                rel="noreferrer"
              >
                Client Code
              </a>
            </span>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <img src={img2} class="Mobile" alt="..." />
          </div>
          <div className="col-md-6">
            <h5>Mobile Service Center</h5>
            <p>
              <strong>Details:</strong> A single-page web application shows an
              online mobile service system. The attractive application user
              interfaces design and user authentication system Firebase as Login
              authentication(react-router). Creact admin panel, user review
              system, and show home page.
              <br />
              <br />
              <strong>Technologies:</strong> ReactJs, JavaScript, NodeJs,
              MongoDB, ExpressJs, CSS, Bootstrap, react-hook-form etc.
            </p>
            <a
              href="https://clubmanager.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              Web View
            </a>
            <span className="ml-3">
              <a
                href="https://github.com/rubelahme/Sports-Club"
                target="_blank"
                rel="noreferrer"
              >
                Client Code
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
