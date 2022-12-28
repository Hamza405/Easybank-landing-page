import React from "react";
import Logo from "../assets/logo.svg";
import NavBar from "./NavBar";
import Button from "./Button";

const Header = () => {
  return (
    <div className="flex justify-around items-center pt-4 pb-4 shadow-md">
      <div>
        <img src={Logo} alt="EasyBank" />
      </div>
      <NavBar />
      <Button>Request Invite</Button>
    </div>
  );
};

export default Header;
