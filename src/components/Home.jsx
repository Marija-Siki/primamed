import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white relative"
      style={{
        backgroundImage: `url(cekaonica.jpeg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="relative z-10 w-full lg:w-4/5 space-y-5 mt-10"
      >
        <h1 className="text-xl md:text-3xl lg:text-4xl leading-tight">
          <p>UNAPREDITE SVOJE ZDRAVLJE,</p>
          <p>POVRATITE POKRETLJIVOST,</p>
          <p>OSLOBODITE SE BOLA,</p>
          <p>ŽIVITE KVALITETNIJI ŽIVOT.</p>
        </h1>
      </motion.div>
    </div>
  );
};

export default Home;
