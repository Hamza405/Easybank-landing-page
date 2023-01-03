import NavTextButton from "../NavTextButton";

const NavList = ["home", "about", "contracts", "blog", "careers"];

const NavBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center">
      {NavList.map((item) => (
        <NavTextButton
          key={item}
          variant="light"
          className="mx-3 capitalize text-center text-gray-600 hover:text-green-500"
        >
          {item}
        </NavTextButton>
      ))}
    </div>
  );
};

export default NavBar;
