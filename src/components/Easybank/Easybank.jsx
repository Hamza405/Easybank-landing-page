import IconBudgeting from "../../assets/icon-budgeting.svg";
import IconOnline from "../../assets/icon-online.svg";
import IconOnboarding from "../../assets/icon-onboarding.svg";
import IconApi from "../../assets/icon-api.svg";
import BudgeItem from "./BudgeItem";

const BudgeList = [
  {
    id: 1,
    title: "Online Banking",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    image: IconOnline,
  },
  {
    id: 2,
    title: "Simple Budgeting",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    image: IconBudgeting,
  },
  {
    id: 4,
    title: "Open API",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    image: IconApi,
  },
  {
    id: 3,
    title: "Fast Onboarding",
    des: " Take your financial life online, Yor easybank account will be aone-stop-shop for spending, saving, budgeting, investing and much more.",
    image: IconOnboarding,
  },
];

const Easybank = () => {
  return (
    <div className="flex justify-center items-center md:items-start flex-col bg-gray-100 py-10 md:py-16 px-8 md:px-20 lg:px-32">
      <p className="text-4xl text-center md:text-left text-gray-700">
        Why choose Easybank?
      </p>
      <p className="text-center md:text-start py-8 text-lg text-gray-500 md:w-1/2">
        Take your financial life online, Yor easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing and much more.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {BudgeList.map((item) => (
          <BudgeItem
            key={item.id}
            title={item.title}
            image={item.image}
            des={item.des}
          />
        ))}
      </div>
    </div>
  );
};

export default Easybank;
