import ImagesMain from "./ImagesMain";
import TextMain from "./TextMain";

const Main = () => {
  return (
    <div className="relative overflow-hidden  flex justify-between align-center w-full bg-gray-100">
      <TextMain />
      <ImagesMain />
    </div>
  );
};

export default Main;
