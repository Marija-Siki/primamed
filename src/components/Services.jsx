import React, { useState, useEffect } from "react";
import Button from "../layouts/Button";
import ServicesCard from "../layouts/ServicesCard";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const dryNeedling = (
  <img className="w-8 h-8" src="/dryNeedling.png" alt="dryNeedling" />
);
const laser = <img className="w-8 h-8" src="/laser.png" alt="laser" />;
const massage = <img className="w-8 h-8" src="/massage.png" alt="masaza" />;
const body = (
  <img className="w-8 h-8" src="/body.png" alt="fizikalna terapija" />
);
const neuro = (
  <img className="w-8 h-8" src="/neuro.png" alt="neuroloska rehabilitacija" />
);
const dailyTherapyPackage = (
  <img
    className="w-8 h-8"
    src="/dailyTherapyPackage.png"
    alt="terapijski paket"
  />
);
const stretching = (
  <img className="w-8 h-8" src="/stretching.png" alt="korektivna gimnastika" />
);

const serviceDescriptions = {
  fizikalnaTerapija: `
    <strong>Elektroterapija:</strong> Elektroterapija koristi struju različitih frekvencija za stimulaciju mišića, smanjenje bola i poboljšanje funkcije mišićnog tkiva. Pogodna je za osobe sa hroničnim bolom, povredama i neurološkim problemima.<br/>
    <strong>Sonoterapija (Ultrazvučna terapija):</strong> Sonoterapija koristi ultrazvučne talase kako bi smanjila zapaljenje, ubrzala oporavak tkiva i poboljšala cirkulaciju u povređenim delovima tela.<br/>
    <strong>Laseroterapija:</strong> Laseroterapija je neinvazivna tehnika koja koristi svetlosnu energiju za regeneraciju tkiva, smanjenje bola i ubrzavanje zaceljenja.<br/>
    <strong>Magnetoterapija:</strong> Magnetoterapija koristi magnetsko polje kako bi se poboljšala cirkulacija, smanjio otok i ubrzao oporavak kostiju i mekog tkiva.
  `,
  dnevniTerapijskiPaket: `
    <strong>Dnevni terapijski paket:</strong> Ovaj paket uključuje kombinaciju elektroterapije, kinezioterapije i dry needling-a ili masaže, kreiran da pruži maksimalne rezultate u smanjenju bola i oporavku. Idealan je za osobe sa hroničnim bolom ili nakon povreda koje zahtevaju intenzivan terapijski pristup.
  `,
  neurološkaRehabilitacija: `
    <strong>Neurološka rehabilitacija:</strong> Program neurološke rehabilitacije pomaže osobama koje su pretrpele moždani udar, povrede nervnog sistema ili neurološke bolesti da povrate mobilnost i funkcionalnost.
  `,
  dryNeedling: `
    <strong>Dry Needling:</strong> Dry needling tehnika koristi tanke igle za stimulaciju mišićnih okidačkih tačaka, smanjenje bolova i poboljšanje funkcije mišića. Efikasna je kod mišićnih napetosti i hroničnog bola.
  `,
  kombinovanaTerapija: `
  <strong>Kombinovana terapija 1 (Elektroterapija + Laser/Ultrazvuk):</strong> Ova terapija kombinuje prednosti elektroterapije i laser/ultrazvučne terapije kako bi se pojačao efekat smanjenja bola i ubrzanja regeneracije tkiva, kao i smanjenje upalnih procesa.<br/><br/>
  <strong>Kombinovana terapija 2 (Sonoterapija + Laser/Ultrazvuk + Magnet):</strong> Kombinacija sonoterapije, laseroterapije i magnetoterapije za maksimalan terapijski efekat u lečenju povreda i hroničnih stanja.
`,
  korektivnaGimnastika: `
    <strong>Korektivna gimnastika:</strong> Korektivna gimnastika pomaže deci sa posturalnim problemima, ravnim stopalima ili deformitetima kičme da poboljšaju držanje i fizičku funkciju.<br/><br/>
    <strong>Korektivna gimnastika za odrasle:</strong> Namenjena osobama sa posturalnim problemima, bolovima u leđima ili zglobovima, sa ciljem poboljšanja snage i fleksibilnosti.
  `,
  terapeutskaMasaža: `
    <strong>Terapeutska masaža:</strong> Koristi različite tehnike za otklanjanje napetosti u mišićima, poboljšanje cirkulacije i smanjenje bola.
  `,
  relaksMasaža: (
    <>
      <strong>Relaks masaža:</strong> Ima za cilj opuštanje, smanjenje stresa i
      poboljšanje opšteg blagostanja.
    </>
  ),
};

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleCardClick = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsHovered(false);
    setIsModalOpen(false);
  };

  const isSmallerScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <>
      <div className="flex flex-col justify-center pt-32 lg:px-32 px-5 lg:min-h-screen lg:pt-0">
        <div className="flex flex-col items-center lg:flex-row justify-between">
          <motion.h1
            {...(isSmallerScreen
              ? {}
              : {
                  variants: fadeIn("right", 0.3),
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: false, amount: 0.7 },
                })}
            className="pb-8 text-3xl font-semibold text-center lg:pb-0 lg:text-start"
          >
            Naše usluge
          </motion.h1>
          <motion.div
            {...(isSmallerScreen
              ? {}
              : {
                  variants: fadeIn("left", 0.3),
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: false, amount: 0.7 },
                })}
          >
            <Link to="/prices">
              <Button title="Cenovnik" />
            </Link>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-14 md:px-20 lg:px-0">
          <ServicesCard
            icon={body}
            title="Fizikalna terapija"
            onClick={() =>
              handleCardClick(serviceDescriptions.fizikalnaTerapija)
            }
          />
          <ServicesCard
            icon={dailyTherapyPackage}
            title="Dnevni terapijski paket"
            onClick={() =>
              handleCardClick(serviceDescriptions.dnevniTerapijskiPaket)
            }
          />
          <ServicesCard
            icon={neuro}
            title="Neurološka rehabilitacija"
            onClick={() =>
              handleCardClick(serviceDescriptions.neurološkaRehabilitacija)
            }
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5 md:px-20 lg:px-0">
          <ServicesCard
            icon={dryNeedling}
            title="Dry Needling"
            onClick={() => handleCardClick(serviceDescriptions.dryNeedling)}
          />
          <ServicesCard
            icon={laser}
            title="Kombinovane terapije"
            onClick={() =>
              handleCardClick(serviceDescriptions.kombinovanaTerapija)
            }
          />
          <ServicesCard
            icon={massage}
            title="Masaže"
            onClick={() =>
              handleCardClick(serviceDescriptions.terapeutskaMasaža)
            }
          />
          <ServicesCard
            icon={stretching}
            title="Korektivna gimnastika"
            onClick={() =>
              handleCardClick(serviceDescriptions.korektivnaGimnastika)
            }
          />
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]"
          onClick={closeModal}
        >
          <div
            className={`overflow-auto max-h-[80vh] bg-white p-6 text-sm md:text-xl space-y-4 rounded-lg w-11/12 max-w-lg lg:py-10 px-10 relative transition-transform transform ${
              isModalOpen ? "scale-100 opacity-100" : "scale-75 opacity-0"
            } duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-600 transform transition-transform duration-300 hover:-translate-y-1"
              onClick={closeModal}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                className="w-4 transition-transform duration-300"
                src={isHovered ? "/x-hover.png" : "/x.png"}
                alt="Close"
              />
            </button>

            <div dangerouslySetInnerHTML={{ __html: modalContent }} />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
