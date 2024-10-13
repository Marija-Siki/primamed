import { HashLink as Link } from "react-router-hash-link";

const Footer = () => {
  return (
    <div className="bg-backgroundColor pl-10 text-white rounded-t-3xl mt-8 md:mt-0 lg:pl-0">
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:px-32 px-5">
        <div className=" w-full lg:w-1/4">
          <Link to="/#home" smooth>
            <img
              className="transition-all cursor-pointer lg:block w-60 my-10 lg:mx-auto"
              src="/logo.png"
              alt="logo"
            />
          </Link>
          <p className="text-md w-full lg:text-lg md:w-80 lg:mx-auto lg:w-80">
            Posvećeni smo vašem oporavku i životu bez ograničenja, bilo da se
            radi o hroničnom bolu, rehabilitaciji nakon povreda ili
            postoperativnom oporavku.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-10">Usluge</h1>
          <ul>
            <li className="pb-1">Fizikalna teraija</li>
            <li className="pb-1">Kombinovane terapije</li>
            <li className="pb-1">Korektivna gimnastika</li>
            <li className="pb-1">Dry Needling</li>
            <li className="pb-1">Neurološka rehabilitacija</li>
            <li className="pb-1">Specijalan paket</li>
            <li>Masaže</li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-10">Kontakt</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
              <img className="w-5 h-5 mr-3" src="/icon_mail_.png" alt="email" />
              <span>primamedfizio@gmail.com</span>
            </div>
            <div className="flex flex-row">
              <img
                className="w-5 h-5 mr-3"
                src="/icon_whatsapp_.png"
                alt="Kontakt telefon"
              />
              <span>061 119 72 72</span>
            </div>
            <a
              className="flex flex-row"
              target="_blank"
              href="https://www.instagram.com/primamed_fizio_centar/"
            >
              <img
                className="w-5 h-5 mr-3"
                src="/icon_instagram_.png"
                alt="instagram"
              />
              <span>primamed_fizio_centar</span>
            </a>
            <a
              className="flex flex-row"
              target="_blank"
              href="https://www.facebook.com/people/PrimaMed-Fizio-Centar-Kragujevac/61566296820243/?mibextid=ZbWKwL"
            >
              <img
                className="w-5 h-5 mr-3"
                src="/icon_facebook_.png"
                alt="facebook"
              />
              <span>PrimaMed Fizio Centar</span>
            </a>
            <div className="flex flex-row">
              <img
                className="w-5 h-5 mr-3"
                src="/icon_pin_.png"
                alt="lokacija"
              />
              <span>Zmaj Jovina 55/7, Kragujevac</span>
            </div>
            <div>
              <iframe
                height="300"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                className="pt-4 w-[280px] lg:w-[370px]"
                src="https://maps.google.com/maps?width=400&amp;height=300&amp;hl=en&amp;q=Zmaj%20Jovina%2055/7,%20Kragujevac%2034000+(PrimaMed%20Fizio%20Centar)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          <span className=" text-hoverColor">Primamed Fizio Centar 2024</span> |
          All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
