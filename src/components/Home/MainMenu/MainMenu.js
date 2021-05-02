import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Typical from "react-typical";

import "./MainMenu.scss";
const MainMenu = () => {
  return (
    <div className="row menu-text align-items-center justify-content-center text-center">
      <div className="col-lg-12">
        <div className="center">
          <h1>
            I'm Rubel Ahmed <br />{" "}
            <Typical
              steps={[
                "Full Stack Web Developer",
                3000,
                "Front-End Web Developer",
                4000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h1>
          <p>
            I would like to introduce myself to you as I believe I have the
            skills.
          </p>
          <div>
            <a
              className="btn github"
              href="https://github.com/rubelahme"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <span>
              <a
                className="btn github"
                href="https://www.linkedin.com/in/rubel-ahmed-389809210"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
            <span>
              <a
                className="btn github"
                href="https://drive.google.com/file/d/1HJTs9NpRwdYKcgRv4xA5tgZ1PCpo1oPB/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
