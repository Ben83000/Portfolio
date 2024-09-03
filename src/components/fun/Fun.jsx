import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import up from "../../assets/me/up.png";
import fire from "../../assets/me/fire.png";
import rocketSmoke from "../../assets/me/rocketSmoke.png"
import landscape from "../../assets/me/landscape.png";
import { Link } from "react-scroll";

function Fun() {
  const controls = useAnimationControls();
  const landscapeRef = useRef();
  const landscapeInView = useInView(landscapeRef, { amount: 0.3, once: true });

  const handleClick = async () => {
    await controls.start((i) => ({
      bottom: i === 0 && "85%",
      scale: i === 1 && [1.2, 1.5, 1.3, 1.5, 1.3, 1.4, 1.2, 1.5, 1.2],
      transition: { duration: 1.3, ease: "easeInOut"}
    }));
    controls.start((i) => ({
      bottom: i === 0 && "6%",
      scale: i === 1 && 1,
      transition: { duration: 1.4, ease: "easeInOut" },
    }));
  };

  return (
    <div className="flex w-full -mb-10">
      <motion.img
        initial={{ opacity: 0 }}
        animate={landscapeInView && { opacity: 1 }}
        transition={{ duration: 1 }}
        src={landscape}
        ref={landscapeRef}
        alt=""
        className=""
      />
      <Link duration={1200} smooth="true" to="home" offset={-150}>
        <motion.div
          initial={{ bottom: "6%", left: "50%", translateX: "-50%" }}
          animate={controls}
          custom={0}
          transition={{ duration: 1.3, ease: "easeInOut" }}
          onClick={handleClick}
          className="absolute z-10 w-[40%] flex justify-center items-center"
        >
          <motion.div
            animate={{ y: [0, 30, 0] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 4,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <motion.img src={up} alt="rocket" className="" />
            
            <motion.img
              src={fire}
              animate={controls}
              custom={1}
              alt=""
              className="absolute top-[54%] left-[42%] h-[25%]"
              style={{ transformOrigin: "top center" }}
            />
          </motion.div>
        </motion.div>
      </Link>
    </div>
  );
}

export default Fun;
