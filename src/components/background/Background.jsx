import React from "react";
import planet from "../../assets/me/planet.png";
import astronaut1 from "../../assets/me/astronaut1.png";
import { motion } from "framer-motion";

function Background() {
  return (
    <div className="h-full absolute top-0 w-full -z-10">
      <motion.img
        initial={{ y: 0, x: 0, scale: 1 }}
        animate={{
          scale: 0.8,
          y: -500,
          x: -200,
          transition: { duration: 5, ease: "easeInOut" },
        }}
        src={planet}
        className=""
        alt="planet"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0.4, x: -350, y: 500 }}
        animate={{ scale: 0.2, opacity: 1, x: 0, y: 100 }}
        transition={{ duration: 5 }}
        className="max-md:hidden absolute top-0"
      >
        <motion.img
          src={astronaut1}
          alt="astronaut"
          animate={{
            x: [
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
        />
      </motion.div>
    </div>
  );
}

export default Background;
