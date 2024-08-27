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

const appearAnimation = {
  hidden: {
    y: "-200%"
  },
  visible: {
    y: 0
  },
}

const ElementNav = React.forwardRef(({ icon, title }, ref) => {
  const controls = useAnimationControls();

  const handleMouseEnter = () => {
    controls.start("visible");
  };

  const handleMouseLeave = () => {
    controls.start("exit");
  };

  return (
    <motion.li
      className="flex flex-col cursor-pointer justify-items-center"
      variants={appearAnimation}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={ref}
    >
      <a className="flex items-baseline gap-1 my-auto" href="">
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
    </motion.li>
  );
});

export default ElementNav;
