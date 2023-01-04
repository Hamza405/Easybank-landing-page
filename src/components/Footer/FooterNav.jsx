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
    <div className="py-4 flex flex-col justify-between items-center md:grid md:grid-cols-2 gap-y-4 md:gap-x-10">
      {NavList.map((item) => (
        <NavTextButton key={item} variant="dark">
          {item}
        </NavTextButton>
      ))}
    </div>
  );
};

export default FooterNav;
