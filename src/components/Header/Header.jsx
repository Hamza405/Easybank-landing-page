import React from "react";
import Logo from "../../assets/logo.svg";
import NavBar from "./NavBar";
import Button from "../Button";

import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="relative bg-white flex justify-between md:justify-around items-center px-3 md:px-0 py-6 md:py-4 shadow-md z-30 h-16 md:h-20">
      <div className="ml-4 md:ml-0">
        <img src={Logo} alt="EasyBank" />
      </div>
      <NavBar />
      <MobileNav />
      <div className="hidden md:block">
        <Button>Request Invite</Button>
      </div>
    </header>
  );
};

export default Header;
