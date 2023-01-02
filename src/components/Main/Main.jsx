import Button from "../Button";
import BG from "../../assets/bg-intro-desktop.svg";
import Mockup from "../../assets/image-mockups.png";

const Main = () => {
  return (
    <div className="relative overflow-hidden flex justify-between align-center w-full bg-gray-100">
      <div className="pl-28 pr-24 py-32 w-1/2">
        <p className="text-5xl font-light">
          Next generation
          <br /> digital banking
        </p>
        <p className="py-8 text-lg text-gray-500">
          Take your financial life online, Yor easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <img
        className="w-2/3 object-fill absolute top-0 right-0 translate-x-[20%] translate-y-[-25%]"
        src={BG}
      />
      <img
        className="w-1/2 object-fill absolute top-0 right-0 translate-x-[20%] translate-y-[-15%] z-10"
        src={Mockup}
      />
    </div>
  );
};

export default Main;
