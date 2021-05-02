import React from "react";
import MainMenu from "../MainMenu/MainMenu";
import Navbers from "../Navbers/Navbers";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="background ">
        <div className="container">
          <Navbers></Navbers>
          <MainMenu></MainMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
