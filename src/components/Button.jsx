import React from "react";

const Button = (props) => {
  return (
    <div
      {...props}
      className="w-fit bg-gradient-to-r from-lime-green to-bright-cyan py-2 px-8 text-white rounded-full cursor-pointer"
    >
      {props.children}
    </div>
  );
};

export default Button;
