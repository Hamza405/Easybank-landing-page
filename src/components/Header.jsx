import React from "react";
import Logo from "../assets/logo.svg";
import NavBar from "./NavBar";
import Button from "./Button";
import Menu from "../assets/menu.png";

const Header = () => {
  return (
    <div className="flex justify-between md:justify-around items-center px-3 md:px-0 py-6 md:py-4 shadow-md">
      <div className="ml-4 md:ml-0">
        <img src={Logo} alt="EasyBank" />
      </div>
      <NavBar />
      <div className="hidden md:block">
        <Button>Request Invite</Button>
      </div>
      <div className="w-8 h-8 mr-4 md:ml-0 block md:hidden">
        <img src={Menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
