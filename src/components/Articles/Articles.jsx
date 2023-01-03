import React from "react";
import Article from "./Article";
import ImageMoney from "../../assets/image-currency.jpg";
import ImageRestaurant from "../../assets/image-restaurant.jpg";
import ImagePlane from "../../assets/image-plane.jpg";
import ImageConfetti from "../../assets/image-confetti.jpg";

const ArticlesList = [
  {
    id: 1,
    title: "Receive money in any currency with any fees",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    by: "Wilson Hutton",
    image: ImageMoney,
  },
  {
    id: 2,
    title: "Treat your self without worrying about money",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    by: "Wilson Hutton",
    image: ImageRestaurant,
  },
  {
    id: 3,
    title: "Take your Eeasybank card wherever you go",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    by: "Wilson Hutton",
    image: ImagePlane,
  },
  {
    id: 4,
    title: "Our invite-only Beta accounts are now live",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    by: "Wilson Hutton",
    image: ImageConfetti,
  },
];

const Articles = () => {
  return (
    <div className="flex justify-center items-center md:items-start flex-col py-10 md:py-16 px-8 md:px-20 lg:px-32">
      <p className="text-4xl text-center md:text-left text-gray-700">
        Latest Articles
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {ArticlesList.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            des={item.des}
            by={item.by}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;
