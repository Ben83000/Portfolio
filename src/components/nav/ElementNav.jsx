import React, { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const underlineAnimation = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "100%",
  },
  exit: {
    width: 0,
  },
};

const appearAnimation = {
  hidden: {
    y: "-200%",
  },
  visible: {
    y: 0,
  },
};

const ElementNav = React.forwardRef(
  ({ icon, title, id, setSelectedMenuItem, selectedMenuItem }, ref) => {
    const controls = useAnimationControls();

    const handleMouseEnter = () => {
      controls.start("visible");
    };

    const handleMouseLeave = () => {
      controls.start("exit");
    };

    const handleSelectedMenuItem = () => {
      selectedMenuItem !== id && setSelectedMenuItem(id)
    }

    return (
      <motion.li
        className="flex flex-col cursor-pointer justify-items-center"
        variants={appearAnimation}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={selectedMenuItem === id ? { color: "rgb(240, 171, 252)", scale: 1.1} : {color: "rgb(255, 255, 255)", scale: 1}}
        ref={ref}
      >
        <Link
          to={id}
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          onSetActive={handleSelectedMenuItem}
          className="flex items-baseline gap-1 my-auto"
        >
          <FontAwesomeIcon icon={icon} />
          <p>{title}</p>
        </Link>
        <motion.div
          variants={underlineAnimation}
          initial="hidden"
          animate={controls}
          exit={controls}
          className="h-1.5 min-h-1.5 bg-fuchsia-500 rounded-lg"
        ></motion.div>
      </motion.li>
    );
  }
);

export default ElementNav;
