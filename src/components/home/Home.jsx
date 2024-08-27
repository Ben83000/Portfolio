import React from "react";
import flying from "../../assets/me/flying.png";
import { delay, motion } from "framer-motion";

function Home() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="h-[calc(100vh-80px)] w-full grid md:grid-cols-3 gap-4 px-10 py-20 text-white">
      <motion.div
        className="md:col-span-2 flex flex-col text-4xl lg:px-20 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.02 }}
      >
        <motion.p>
          {"Hey ! Comment ça va ?".split("").map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.p>
          {"Je suis ".split("").map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
          {"Benjamin".split("").map((letter, index) => (
            <motion.span
              className="text-purple-400 font-semibold"
              key={index}
              variants={letterAnimation}
            >
              {letter}
            </motion.span>
          ))}
          {" , développeur Web Full Stack passionné, et je vais t'aider à réaliser tous tes projets !"
            .split("")
            .map((letter, index) => (
              <motion.span key={index} variants={letterAnimation}>
                {letter}
              </motion.span>
            ))}
        </motion.p>

        <img src="" alt="" />
      </motion.div>

      <motion.div
        className="md:col-span-1 "
        initial={{ scale: 0, y: -250 }}
        animate={{ scale: 1, y: 0, transition: { duration: 6 } }}
      >
        <motion.img
          animate={{
            y: [
              1, 3, 5, 7, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -7, -5, -3, -1, 1,
            ],
            scale: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
          src={flying}
          className="object-contain"
          alt="alien flying"
        />
      </motion.div>
    </div>
  );
}

export default Home;
