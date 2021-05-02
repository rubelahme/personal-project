import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import Navbers from "../Navbers/Navbers";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="background mb-5">
        <div className="container">
          <Navbers></Navbers>
          <MainMenu></MainMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
