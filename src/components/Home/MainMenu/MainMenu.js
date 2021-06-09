import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";
import "./MainMenu.scss";
const MainMenu = () => {
  return (
    <div className="row menu-text align-items-center justify-content-center text-center">
      <div className="col-lg-12">
        <div className="center">
          <h1>
            <Fade top duration={4000} distance="300px">
              <p className="p-0 m-0 ">I'm Rubel Ahmed</p>
            </Fade>
            <Fade top duration={4000} className="Rubel" distance="300px">
              <Typical
                steps={[
                  "React.Js Developer",
                  3000,
                  "Front-End Web Developer",
                  3000,
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </Fade>
          </h1>
          <p>
            <Fade top duration={4000} distance="300px">
              I want to introduce myself to you because I believe I have the
              skills.
            </Fade>
          </p>
          <div>
            <a
              className="btn github"
              href="https://github.com/rubelahme"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> <span>Github</span>
            </a>
            <span>
              <a
                className="btn github"
                href="https://www.linkedin.com/in/rubel-ahmed-389809210"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} /> <span>Linkedin</span>
              </a>
            </span>
            <span>
              <a
                className="btn github"
                href="https://drive.google.com/file/d/1HJTs9NpRwdYKcgRv4xA5tgZ1PCpo1oPB/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFile} /> <span>Resume</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
