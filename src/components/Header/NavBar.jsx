import React from "react";

const NavList = ["home", "about", "contracts", "blog", "careers"];

const NavBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center">
      {NavList.map((item) => (
        <p
          key={item}
          className="mx-3 capitalize text-center text-gray-600 hover:text-green-500"
        >
          {item}
        </p>
      ))}
    </div>
  );
};

export default NavBar;
