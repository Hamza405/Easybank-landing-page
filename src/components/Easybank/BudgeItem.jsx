import React from "react";

const BudgeItem = ({ image, title, des }) => {
  return (
    <div className="my-8 w-full flex flex-col justify-center items-center md:items-start">
      <img src={image} />
      <p className="text-2xl text-center text-gray-700 py-8">{title}</p>
      <p className="text-center md:text-start text-lg text-gray-500">{des} </p>
    </div>
  );
};

export default BudgeItem;
