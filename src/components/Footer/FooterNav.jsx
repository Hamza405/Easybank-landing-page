import NavTextButton from "../NavTextButton";

const NavList = [
  "about us",
  "contracts",
  "blog",
  "careers",
  "support",
  "privacy policy",
];

const FooterNav = () => {
  return (
    <div className="flex flex-col justify-between items-center md:grid grid-cols-2 md:gap-x-10 md:gap-y-2">
      {NavList.map((item) => (
        <NavTextButton
          key={item}
          variant="dark"
          className="my-2 capitalize text-center cursor-pointer text-white hover:text-green-500"
        >
          {item}
        </NavTextButton>
      ))}
    </div>
  );
};

export default FooterNav;
