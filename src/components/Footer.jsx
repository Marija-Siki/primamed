// import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      {/* <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0"> */}
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">PhysioClynic</h1>
          <p className=" text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            quaerat molestias dolorum, possimus minima cumque neque animi, vero,
            velit odio et odit officiis! Ratione minima placeat iusto enim
            inventore aliquam.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Naša klinika
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              O nama
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Usluge
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Naš tim
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Usluge</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Pregled specijaliste
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Fizikalna teraija
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              Laser
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Kontakt</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Ulica Kralja Milana br.60, Kragujevac{" "}
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              PhysioClynic@testmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              +381643117404
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          <span className=" text-hoverColor"> PhysioClinic 2024</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
