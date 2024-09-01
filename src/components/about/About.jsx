import React, { useEffect, useRef, useState } from "react";
import coding from "../../assets/me/coding.png";
import { motion, useInView } from "framer-motion";
import smoke from "../../assets/me/smoke.png";

function About() {
  const imageRef = useRef();
  const textRef = useRef();
  const imageInView = useInView(imageRef, { amount: 0.3, once: true });
  const textInView = useInView(textRef, { amount: 0.3, once: true });

  useEffect(() => {
    console.log(imageInView);
  }, [imageInView]);

  return (
    <motion.section className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-10 gap-2">
      <motion.div
        ref={imageRef}
        animate={
          imageInView ? { scale: 1, opacity: 1 } : { opacity: 0, scale: 0 }
        }
        transition={{ duration: 1 }}
        className="flex items-center justify-center relative col-span-1 max-md:row-start-2 max-md:h-96 w-fit mx-auto"
      >
        <motion.img src={coding} alt="" className="object-contain h-full w-full" />
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

      <motion.div
        ref={textRef}
        animate={textInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="col-span-2 flex flex-col text-white text-2xl gap-4 text-center"
      >
        <p className="mb-10 text-4xl">Une petite présentation</p>
        <p>
          Comme écrit plus haut, je m'appelle{" "}
          <span className="text-fuchsia-500 font-semibold">Benjamin</span>, et je suis passionné de nouvelles technologies.
        </p>
        <p>
          Je me forme de manière autodidacte depuis août 2023 en m'appuyant sur des ressources variées : documentations, IA, YouTube, et bien plus encore. Pour moi, un bon développeur est toujours en quête de nouvelles connaissances, prêt à relever chaque défi avec curiosité et détermination.
        </p>
        <p>
          Mon parcours est guidé par cette conviction : l'apprentissage est un voyage continu où chaque étape permet de se surpasser.
        </p>
      </motion.div>
    </motion.section>
  );
}

export default About;
