import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import navElements from "../nav/navElements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";
import Toggle from "../ui/Toggle";
import { useScroll } from "@/contexts/scrollContext";
import { useLanguage } from "@/contexts/languageContext";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { isScrollingDown } = useScroll();
  const { language } = useLanguage()

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="md:hidden h-16 bg-purple-950/70 p-2 sticky top-0 backdrop-blur-sm flex gap-2 items-center z-50">
      <motion.a
        whileHover={{ rotate: 3 }}
        href=""
        className="text-purple-400 text-2xl font-semibold"
      >
        &lt;Ben /&gt;
      </motion.a>
      <AnimatePresence mode="popLayout">
        {!isScrollingDown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut"}}
          >
            <motion.div
              animate={{ y: [ 5, -5] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                duration: 1.5,
              }}
              className="fixed top-20 bg-fuchsia-400 rounded-full right-2"
            >
              <Toggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        onClick={handleClick}
        animate={isOpen ? { rotateZ: 180 } : { rotateZ: 0 }}
        className="flex flex-col h-full w-12 ml-auto justify-around cursor-pointer"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 16 } : { rotate: 0 }}
          className="h-2 rounded-lg bg-purple-400 w-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: 45 } : { rotate: 0 }}
          className="h-2 rounded-lg bg-purple-400 w-full"
        ></motion.span>
        <motion.span
          animate={isOpen ? { rotate: -45, y: -16 } : { rotate: 0 }}
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
            className="w-full bg-purple-950/70 absolute left-0 h-[60vh] top-16 p-6 text-white flex flex-col items-center justify-evenly"
          >
            {navElements.map((item, index) => (
              <Link
                onClick={() => handleLinkClick(item?.id)}
                to={item?.id}
                smooth={true}
                duration={500}
                offset={-150}
                className="text-3xl flex gap-2"
                key={item?.id + index}
              >
                <FontAwesomeIcon className="" icon={item?.icon} />
                <p>{language === "FR" ? item?.title?.fr : item?.title?.en}</p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default MobileNav;
