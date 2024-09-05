import React, { useRef } from "react";
import coding from "../../../assets/me/coding.png";
import { AnimatePresence, motion, useInView } from "framer-motion";
import smoke from "../../../assets/me/smoke.png";
import { Element } from "react-scroll";
import { useLanguage } from "@/contexts/languageContext";

function About() {
  const { language } = useLanguage();
  const imageRef = useRef();
  const imageInView = useInView(imageRef, { amount: 0.3, once: true });

  return (
    <Element name="about">
      <motion.section className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 gap-2">
        <motion.div
          ref={imageRef}
          animate={
            imageInView ? { scale: 1, opacity: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ duration: 1 }}
          className="flex items-center justify-center relative col-span-1 max-md:row-start-2 max-md:h-2/3 w-fit mx-auto z-20"
        >
          <motion.img
            src={coding}
            alt=""
            className="object-contain h-full w-full"
          />
          <motion.img
            animate={{
              y: [80, 70, 60, 50, 40],
              filter: [
                "blur(0px)",
                "blur(3px)",
                "blur(5px)",
                "blur(5px)",
                "blur(7px)",
              ],
              scale: [1, 1.05, 1.1, 1.15, 1.2],
              opacity: [0, 0.5, 1, 0.5, 0],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              delay: 0.5,
            }}
            src={smoke}
            alt="smoke"
            className="absolute right-4 w-1/5"
          />

          <motion.img
            animate={{
              y: [80, 70, 60, 50, 40],
              filter: [
                "blur(0px)",
                "blur(3px)",
                "blur(5px)",
                "blur(5px)",
                "blur(7px)",
              ],
              scale: [1, 1.05, 1.1, 1.15, 1.2],
              opacity: [0, 0.5, 1, 0.5, 0],
            }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
              delay: 1.5,
            }}
            src={smoke}
            alt="smoke"
            className="absolute right-4 w-1/5"
          />

          <motion.img
            animate={{
              y: [80, 60, 40, 20, 0],
              filter: [
                "blur(0px)",
                "blur(3px)",
                "blur(5px)",
                "blur(5px)",
                "blur(7px)",
              ],
              scale: [1, 1.05, 1.1, 1.15, 1.2],
              opacity: [0, 0.5, 1, 0.5, 0],
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity,
              delay: 2.5,
            }}
            src={smoke}
            alt="smoke"
            className="absolute right-4 w-1/5"
          />
        </motion.div>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={language}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.3, once: true }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 flex flex-col text-white text-2xl gap-4 text-center z-20"
          >
            <p className="mb-10 text-4xl">
              {language === "FR"
                ? "Une petite présentation"
                : "A Brief Introduction"}
            </p>
            <p>
              {language === "FR"
                ? "Comme écrit plus haut, je m'appelle"
                : "As mentioned earlier, my name is "}{" "}
              <span className="text-fuchsia-500 font-semibold">Benjamin</span>,
              {language === "FR"
                ? "et je suis passionné de nouvelles technologies."
                : "and I am passionate about new technologies."}
            </p>
            <p>
              {language === "FR"
                ? `Je me forme de manière autodidacte depuis août 2023 en m'appuyant
              sur des ressources variées : documentations, IA, YouTube, et bien
              plus encore. Pour moi, un bon développeur est toujours en quête de
              nouvelles connaissances, prêt à relever chaque défi avec curiosité
              et détermination.`
                : `Since August 2023, I have been self-learning by utilizing various resources: documentation, AI, YouTube, and much more. To me, a good developer is always in pursuit of new knowledge, ready to tackle each challenge with curiosity and determination.`}
            </p>
            <p>
              {language === "FR"
                ? `Mon parcours est guidé par cette conviction : l'apprentissage est
              un voyage continu où chaque étape permet de se surpasser.`
                : `My journey is driven by this belief: learning is a continuous journey where each step allows one to surpass oneself.`}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.section>
    </Element>
  );
}

export default About;
