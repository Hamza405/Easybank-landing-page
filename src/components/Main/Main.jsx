import ImagesMain from "./ImagesMain";
import TextMain from "./TextMain";

const Main = () => {
  return (
    <div className="relative overflow-x-hidden flex justify-between align-center w-full ">
      <TextMain />
      <ImagesMain />
    </div>
  );
};

export default Main;
