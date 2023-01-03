import React from "react";

const Article = ({ image, title, des, by }) => {
  return (
    <div className="my-8 w-full">
      <img className="w-full h-2/5 object-center" src={image} />
      <div className="mx-auto py-8 px-4">
        <p className="text-gray-500 font-light text-small">
          By Hamza Al Sheikh
        </p>
        <p className="text-xl text-gray-700 py-4 cursor-pointer hover:text-green-500">
          {title}
        </p>
        <p className="text-center md:text-start text-base text-gray-500">
          {des}
        </p>
      </div>
    </div>
  );
};

export default Article;
