import Button from "../Button";

const TextMain = () => {
  return (
    <div className="md:block flex justify-center items-center flex-col md:pl-12 lg:pl-28 md:pr- py-24 md:py-28 lg:py-32 w-full md:w-1/2 mt-[60%] md:mt-0">
      <p className="text-center md:text-start text-4xl lg:text-5xl font-light">
        Next generation
        <br /> digital banking
      </p>
      <p className="text-center md:text-start px-6 md:mr-24 md:px-0 py-8 text-lg text-gray-500">
        Take your financial life online, Yor easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing and much more.
      </p>
      <Button>Request Invite</Button>
    </div>
  );
};

export default TextMain;
