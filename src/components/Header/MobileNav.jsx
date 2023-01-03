import { useState } from "react";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";

const NavList = ["home", "about", "contracts", "blog", "careers"];

const MobileNav = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setModalIsOpen((prev) => !prev)}
        className="w-8 h-8 mr-4 md:ml-0 block md:hidden"
      >
        <img src={modalIsOpen ? Close : Menu} alt="menu" />
      </div>
      {modalIsOpen && (
        <div
          class="fixed bottom-0 left-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] w-full"
          id="my-modal"
        >
          <div
            class="modal fade absolute top-32 left-[50%] translate-x-[-50%]  w-3/4 sm:w-2/3 outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="border-none shadow-lg flex justify-center align-center w-full pointer-events-auto bg-white bg-clip-padding p-2 rounded-md outline-none ">
              <ul>
                {NavList.map((item) => (
                  <p
                    onClick={() => setModalIsOpen(false)}
                    className="cursor-pointer   m-5 font-medium-24  capitalize text-center text-gray-600"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNav;
