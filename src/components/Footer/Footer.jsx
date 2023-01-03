import React from "react";
import Button from "../Button";
import Logo from "../../assets/logo-dark.svg";
import IconYoutube from "../../assets/icon-youtube.svg";
import IconTwitter from "../../assets/icon-twitter.svg";
import IconPinterest from "../../assets/icon-pinterest.svg";
import IconInstagram from "../../assets/icon-instagram.svg";
import IconFacebook from "../../assets/icon-facebook.svg";

const NavList = [
  "about us",
  "contracts",
  "blog",
  "careers",
  "support",
  "privacy policy",
];

const Footer = () => {
  return (
    <footer className="flex justify-center md:justify-around items-center flex-col md:flex-row py-4 px-8 bg-[#2d314d]">
      <div className="py-4">
        <img src={Logo} alt="Easybank" />
        <div className="flex justify-between items-center pt-8">
          <img src={IconYoutube} />
          <img src={IconInstagram} />
          <img src={IconFacebook} />
          <img src={IconTwitter} />
          <img src={IconPinterest} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center md:grid grid-cols-2 md:gap-x-10 md:gap-y-2">
        {NavList.map((item) => (
          <p
            key={item}
            className="my-2 capitalize text-center cursor-pointer text-white hover:text-green-500"
          >
            {item}
          </p>
        ))}
      </div>
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
