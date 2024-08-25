import React from "react";
import flying from "../../assets/me/flying.png";
import { motion } from "framer-motion";
import hi from "../../assets/me/hi.png";
import hand from "../../assets/me/hand.png";

function Home() {
  return (
    <div className="h-[calc(100vh-80px)] w-full flex p-20 text-white">
      <motion.div className="w-1/2 flex text-4xl justify-center">
        <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
        <p>Salut !</p>
        <img src={hand} alt="" className="h-16"  />
        </div>
          <p>Je suis Benjamin, développeur Web passionné.</p>
        </div>
        
      </motion.div>

      <motion.div
        className="w-1/2"
        initial={{ scale: 0 }}
        animate={{ scale: 0.7, transition: { duration: 1 } }}
      >
        <motion.img
          animate={{
            y: [
              1, 3, 5, 7, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -7, -5, -3, -1, 1,
            ],
            scale: [0.7, 0.9, 0.7],
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
