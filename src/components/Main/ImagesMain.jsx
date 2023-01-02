import BG from "../../assets/bg-intro-desktop.svg";
import BGMobile from "../../assets/bg-intro-mobile.svg";
import Mockup from "../../assets/image-mockups.png";

const ImagesMain = () => {
  return (
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
  );
};

export default ImagesMain;
