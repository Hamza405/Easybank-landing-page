import React from "react";
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
    <footer className="flex justify-center items-center flex-col py-4 px-8 bg-[#2d314d]">
      <div className="py-4">
        <img src={Logo} alt="Easybank" />
        <div className="flex justify-between items-center py-6">
          <img src={IconYoutube} />
          <img src={IconInstagram} />
          <img src={IconFacebook} />
          <img src={IconTwitter} />
          <img src={IconPinterest} />
        </div>
      </div>
      <div className="flex flex-col justify-between items-center">
        {NavList.map((item) => (
          <p
            key={item}
            className="my-2 capitalize text-center text-white hover:text-green-500"
          >
            {item}
          </p>
        ))}
      </div>
      <div></div>
      <div></div>
    </footer>
  );
};

export default Footer;
