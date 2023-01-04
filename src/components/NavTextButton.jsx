import React from "react";

const NavTextButton = ({ children, variant, ...rest }) => {
  return (
    <p
      {...rest}
      className={`mx-3 capitalize text-center hover:text-lime-green cursor-pointer  ${
        variant === "dark" ? "text-white" : "text-gray-600"
      }`}
    >
      {children}
    </p>
  );
};

export default NavTextButton;
