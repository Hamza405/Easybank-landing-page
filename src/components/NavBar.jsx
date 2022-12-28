import React from "react";

const NavList = ["home", "about", "contracts", "blog", "careers"];

const NavBar = () => {
  return (
    <div className="flex w-1/4 justify-between items-center">
      {NavList.map((item) => (
        <p key={item} className="capitalize text-gray-600">
          {item}
        </p>
      ))}
    </div>
  );
};

export default NavBar;
