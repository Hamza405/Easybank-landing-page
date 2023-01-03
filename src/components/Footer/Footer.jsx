import React from "react";
import Button from "../Button";
import Logo from "../../assets/logo-dark.svg";
import FooterNav from "./FooterNav";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="flex justify-center md:justify-around items-center flex-col md:flex-row py-4 px-8 bg-[#2d314d]">
      <div className="py-4">
        <img src={Logo} alt="Easybank" />
        <SocialLink />
      </div>
      <FooterNav />
      <div className="mt-8 flex items-center justify-between flex-col">
        <Button>Request Invite</Button>
        <p className="my-8 capitalize text-center text-gray-400">
          @ Easybank. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
