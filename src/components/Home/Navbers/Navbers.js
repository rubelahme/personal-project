import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Navbers.scss";
const Navbers = () => {
  const Link = [
    {
      link: "#features",
      name: "Home",
    },
    {
      link: "#pricing",
      name: "Bio",
    },
    {
      link: "#Project",
      name: "Project",
    },
    {
      link: "#Contact",
      name: "Contact Me",
    },
  ];

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Navbar.Brand href="#home" className="menu-1">
          React Developer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {Link.map((pd) => (
              <Nav.Link className="menu-1" href={pd.link}>
                {pd.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/rubelahme" target="_blank">
              <FontAwesomeIcon className="github" icon={faGithub} />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/rubel-ahmed-389809210"
              target="_blank"
            >
              <FontAwesomeIcon className="github" icon={faLinkedin} />
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1HJTs9NpRwdYKcgRv4xA5tgZ1PCpo1oPB/view?usp=sharing"
              target="_blank"
            >
              <FontAwesomeIcon className="github" icon={faFile} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbers;
