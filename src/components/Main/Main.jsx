import Button from "../Button";
import BG from "../../assets/bg-intro-desktop.svg";
import BGMobile from "../../assets/bg-intro-mobile.svg";
import Mockup from "../../assets/image-mockups.png";

const Main = () => {
  return (
    <div className="relative overflow-hidden  flex justify-between align-center w-full bg-gray-100">
      <div className="md:block flex justify-center items-center flex-col  md:pl-28 md:pr- py-24 md:py-32 w-full md:w-1/2 mt-[60%] md:mt-0">
        <p className="text-center md:text-start text-4xl md:text-5xl font-light">
          Next generation
          <br /> digital banking
        </p>
        <p className="text-center md:text-start px-6 md:mr-24 md:px-0 py-8 text-lg text-gray-500">
          Take your financial life online, Yor easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing and much
          more.
        </p>
        <Button>Request Invite</Button>
      </div>
      <div>
        <img
          className="hidden md:block w-3/4 object-fill absolute top-0 right-0 translate-x-[25%] translate-y-[-35%] md:translate-y-[-25%]"
          src={BG}
        />
        <img
          className="md:hidden w-full object-fill absolute top-0 right-0 translate-y-[-25%]"
          src={BGMobile}
        />
        <img
          className="w-3/4 md:w-1/2 object-fill absolute top-0 right-0 translate-x-[-15%] md:translate-x-[20%] translate-y-[-30%] md:translate-y-[-15%] z-10"
          src={Mockup}
        />
      </div>
    </div>
  );
};

export default Main;
