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
    <motion.section className="min-h-screen grid grid-cols-1 md:grid-cols-3 px-10">
      <motion.div
        ref={imageRef}
        animate={imageInView ? { scale: 1, opacity: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center relative col-span-1 max-md:row-start-2"
      >
        <motion.img src={coding} alt="" className="" />
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
      animate={ textInView ? { opacity: 1 } : { opacity: 0}}
      transition={{ duration: 1 }}
       className="col-span-2 flex flex-col text-white text-3xl gap-4 px-10 justify-center text-center">
        <p className="mb-10">Une petite présentation ?</p>
        <p>
          Comme écrit plus haut, je suis{" "}
          <span className="text-fuchsia-500 font-semibold">
            Benjamin
          </span>
          , et j'ai toujours été passionné par les nouvelles technologies.
        </p>
        <p>
          C'est pour cela que j'ai décidé de me lancer dans le développement Web
          en août 2023.
        </p>
        <p>
          Je me forme continuellement en Autoditacte, en cherchant mes réponses
          sur le net: IA, docs, Youtube..
        </p>
        <p>Selon moi, un bon développeur doit avant tout savoir qu'il ne sait rien. À chaque nouveau challenge on s'adapte, on apprend et on évolue.</p>
      </motion.div>
    </motion.section>
  );
}

export default About;
