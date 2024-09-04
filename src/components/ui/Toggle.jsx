import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { useLanguage } from "@/contexts/languageContext";

function Toggle() {
  const { language, handleLanguage } = useLanguage();
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start((i) => {
      if (i === 0) {
        return language === "FR"
          ? { x: 24, opacity: [0, 1], scale: [0.5, 1] }
          : { x: 1, opacity: [0, 1], scale: [0.5, 1] };
      }
      if (i === 1) {
        return language === "FR"
          ? { x: 1, opacity: [0, 1], scale: [0.8, 1] }
          : { x: 24, opacity: [0, 1], scale: [0.8, 1] };
      }
    });
    handleLanguage();
  };

  return (
    <motion.div
      onClick={handleClick}
      className="h-6 w-12 flex select-none bg-white rounded-full p-0.5 relative cursor-pointer items-center"
    >
      <motion.div
        custom={0}
        initial={{ x: 1 }}
        animate={controls}
        transition={{ duration: 0.2, ease: "easeInOut"}}
        className="flex h-5 bg-fuchsia-500 w-5 rounded-full absolute"
      ></motion.div>
      <motion.p
        custom={1}
        initial={{ x: 24 }}
        animate={controls}
        transition={{ duration: 0.2, ease: "easeInOut"}}
        className="absolute text-fuchsia-500 font-semibold text-sm h-5 flex justify-center items-center w-5"
      >
        {language}
      </motion.p>
    </motion.div>
  );
}

export default Toggle;
