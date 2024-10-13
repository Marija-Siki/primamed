import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const isSmallerScreen = useMediaQuery({ query: "(max-width: 1280px)" });

  return (
    <div className="lg:min-h-screen flex flex-col lg:flex-row justify-between items-center my-20 lg:mt-0 lg:px-32 px-5 pt-24 lg:pt-16 gap-6">
      <motion.div
        {...(isSmallerScreen
          ? {}
          : {
              variants: fadeIn("right", 0.3),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: false, amount: 0.7 },
            })}
        className="w-full lg:w-2/4 text-md md:text-2xl md:px-16 pb-10 space-y-4 lg:text-xl lg:px-0 lg:pb-0"
      >
        <h1 className="text-3xl md:text-4xl font-semibold text-center pb-6 lg:text-start">
          O nama
        </h1>
        <p className="text-center lg:text-start">
          Naša ambulanta za fizikalnu rehabilitaciju nudi sveobuhvatne tretmane
          osmišljene da poboljšaju pokretljivost, smanje nelagodnost i podrže
          proces oporavka vašeg tela. Uz širok spektar terapija, uključujući
          kineziterapiju, fizikalnu terapiju i specijalizovani dry needling.
          Posvećeni smo vašem oporavku i životu bez ograničenja.
        </p>
        <p className="text-center lg:text-start">
          Nudimo profesionalnu pomoć u lečenju hroničnog i akutnog bola u leđima
          i vratu, degenerativnih bolesti zglobova, kao i rehabilitaciju nakon
          moždanog udara. Takođe se fokusiramo na terapiju sportskih povreda,
          korekciju deformiteta kičme i postoperativni oporavak, kako bismo vam
          omogućili povratak aktivnom životu bez ograničenja.
        </p>
      </motion.div>
      <motion.div
        {...(isSmallerScreen
          ? {
              variants: fadeIn("up", 0.3),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: false, amount: 0.7 },
            }
          : {
              variants: fadeIn("left", 0.3),
              initial: "hidden",
              whileInView: "show",
              viewport: { once: false, amount: 0.7 },
            })}
        className=" w-full lg:w-2/4"
      >
        <img className="" src="/about.png" alt="about photo" />
      </motion.div>
    </div>
  );
};

export default About;
