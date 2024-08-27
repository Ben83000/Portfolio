import React from "react";
import ElementNav from "./ElementNav";
import { motion } from "framer-motion";
import navElements from "./navElements";

const appearAnimation = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

function Nav() {
  return (
    <motion.nav className="hidden h-20 md:flex text-white items-center md:px-10 lg:px-20 xl:px-32 sticky top-0 select-none z-50">
      <motion.a
        whileHover={{ rotate: 3 }}
        initial={{ y: "-200%"}}
        animate={{ y: 0, transition: { duration: 1 }}}
        href=""
        className="text-purple-800 text-3xl font-semibold relative"
      >
        &lt;Ben /&gt;
      </motion.a>

      <motion.ul
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3, delayChildren: 1 }}
        className="flex h-full items-center gap-4 md:gap-8 lg:gap-14 xl:gap-20 text-xl ml-auto"
      >
        {navElements.map((item, index) => (
          <ElementNav key={item?.title} title={item?.title} icon={item?.icon} />
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
