import Button from "../Button";

const Main = () => {
  return (
    <div className="flex justify-between align-center w-full bg-gray-100">
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
      <div className="py-32 w-1/2">Photo</div>
    </div>
  );
};

export default Main;
