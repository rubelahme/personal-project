import React from "react";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

import "./Navbers.scss";
const Navbers = () => {
  const Link = [
    {
      link: "/#",
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
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" fixed="top" variant="light">
        <Navbar.Brand href="#" className="menu-2">
          Rubel Ahmed
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            {Link.map((pd) => (
              <Nav.Link className="menu-1" href={pd.link}>
                {pd.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navbers;
