import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Contact from "../models/Contact";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  useEffect(() => {
    if (showForm || menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showForm, menu]);

  return (
    <div className="fixed w-full text-white z-[999]">
      <div>
        <div className="flex flex-row justify-between p-5 px-5 bg-backgroundColor shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className="flex flex-row items-center cursor-pointer">
            <HashLink to="/#home" smooth>
              <div className="ml-0 w-36 h-14 -mt-2 mb-2 lg:ml-5">
                <img src="/logo.png" alt="logo" />
              </div>
            </HashLink>
          </div>
          <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <HashLink
              to="/#home"
              smooth
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Početna
            </HashLink>
            <HashLink
              to="/#about"
              smooth
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              O nama
            </HashLink>
            <HashLink
              to="/#services"
              smooth
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Usluge
            </HashLink>
            <HashLink
              to="/#gallery"
              smooth
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Galerija
            </HashLink>
            <HashLink
              to="/prices"
              smooth
              className="hover:text-hoverColor transition-all cursor-pointer"
              onClick={closeMenu}
            >
              Cenovnik
            </HashLink>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="mr-0 bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out lg:mr-5"
              onClick={openForm}
            >
              Kontakt
            </button>
          </div>

          {showForm && <Contact closeForm={closeForm} />}

          <div className="lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden mt-6 pb-10 overflow-auto max-h-[85vh] flex flex-col absolute bg-backgroundColor text-white left-0 top-16 font-semibold text-2xl text-center pt-8 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <HashLink
            to="/#home"
            smooth
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Pocetna
          </HashLink>
          <HashLink
            to="/#about"
            smooth
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            O nama
          </HashLink>
          <HashLink
            to="/#services"
            smooth
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Usluge
          </HashLink>
          <HashLink
            to="/#gallery"
            smooth
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Galerija
          </HashLink>
          <HashLink
            to="/prices"
            smooth
            className="hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Cenovnik
          </HashLink>
          <div className="lg:hidden">
            <button
              className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
              onClick={openForm}
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
