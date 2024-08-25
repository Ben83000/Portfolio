import React from "react";
import ElementNav from "./ElementNav";
import { motion } from "framer-motion";
import navElements from "./navElements";

function Nav() {
 

  return (
    <motion.nav
      initial={{ scale: 0, y: 200 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="hidden h-20 md:flex text-white items-center md:px-10 lg:px-20 xl:px-32 relative select-none z-50"
    >
      <motion.a
        whileHover={{ rotate: 3 }}
        href=""
        className="text-purple-400 text-3xl font-semibold relative overflow-hidden text-clip"
      >
        &lt;Ben /&gt;
      </motion.a>
      <ul className="flex items-center gap-4 md:gap-8 lg:gap-14 xl:gap-20 text-xl ml-auto">
        {navElements.map((item, index) => (
          <ElementNav key={item?.title} title={item?.title} icon={item?.icon} />
        ))}
      </ul>
    </motion.nav>
  );
}

export default Nav;
