import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navElements from "../nav/navElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <nav className="md:hidden h-20 bg-purple-950/70 px-10 py-2 relative backdrop-blur-sm flex items-center z-50">
      <motion.a
        whileHover={{ rotate: 3 }}
        href=""
        className="text-purple-400 text-3xl font-semibold overflow-hidden text-clip"
      >
        &lt;Ben /&gt;
      </motion.a>
      <motion.div
        onClick={handleClick}
        animate={isOpen ? { rotateZ: 180 } : { rotateZ: 0 }}
        className="flex flex-col h-full w-12 ml-auto justify-around cursor-pointer"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 22 } : { rotate: 0 }}
          className="h-2 rounded-lg bg-purple-400 w-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          className="h-2 rounded-lg bg-purple-400 w-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, y: -22 } : { rotate: 0 }}
          className="h-2 rounded-lg bg-purple-400 w-full"
        ></motion.span>
      </motion.div>
      <AnimatePresence mode="popLayout">
        {isOpen && (
          <motion.div
            key="sheet"
            initial={{ scale: 0, transformOrigin: "top right" }}
            animate={{ scale: 1, transformOrigin: "top right" }}
            exit={{ scale: 0, transformOrigin: "top right" }}
            className="w-screen bg-purple-950/70 absolute left-0 h-[60vh] top-20 p-6 text-white flex flex-col items-center justify-evenly"
          >
            {navElements.map((item, index) => (
              <a className="text-3xl flex gap-2" key={item?.title} href="">
                <FontAwesomeIcon className="" icon={item?.icon} />
                <p className="">{item?.title}</p>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNav;
