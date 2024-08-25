import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const underlineAnimation = {
  hidden: {
    width: 0
  },
  visible: {
    width: "100%"
  },
  exit: {
    width: 0
  }
}

function ElementNav({ icon, title }) {
  const controls = useAnimationControls();

  const handleMouseEnter = () => {
    controls.start("visible");
  };

  const handleMouseLeave = () => {
    controls.start("exit");
  };

  return (
    <li
      className="flex flex-col cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a className="flex items-baseline gap-1" href="">
        <FontAwesomeIcon icon={icon} />
        <p>{title}</p>
      </a>
      <motion.div
        variants={underlineAnimation}
        initial="hidden"
        animate={controls}
        exit={controls}
        className="h-1.5 min-h-1.5 bg-purple-500 rounded-lg"
      ></motion.div>
    </li>
  );
}

export default ElementNav;
