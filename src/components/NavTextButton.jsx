import React from "react";

const NavTextButton = ({ children, variant, ...rest }) => {
  return (
    <p
      {...rest}
      className={`mx-3 capitalize text-center hover:text-green-500 cursor-pointer  ${
        variant === "dark" ? "text-white" : "text-gray-600"
      }`}
    >
      {children}
    </p>
  );
};

export default NavTextButton;
