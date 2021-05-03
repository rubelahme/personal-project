import React from "react";
import Animiton from "../Animiton/Animiton";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Skill from "../Skill/Skill";

const Home = () => {
  return (
    <>
      <Animiton></Animiton>
      <Header></Header>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Home;
