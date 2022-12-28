import React from "react";

const Button = (props) => {
  return (
    <div
      {...props}
      className="bg-gradient-to-r from-green-500 via-emerald-500 to-blue-400 py-2 px-8 text-white rounded-full"
    >
      {props.children}
    </div>
  );
};

export default Button;
