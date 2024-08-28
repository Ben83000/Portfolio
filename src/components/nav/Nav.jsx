import React, { useEffect, useState } from "react";
import ElementNav from "./ElementNav";
import { motion } from "framer-motion";
import navElements from "./navElements";
import cn from "classnames";

function Nav() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      animate={
        !isTop
          ? {
              backgroundColor: "rgba(232, 121, 249, 0.2)",
              backdropFilter: "blur(5px)",
            }
          : { backgroundColor: "rgba(0, 0, 0, 0)" }
      }
      transition={{ duration: 0.5 }}
      className="hidden h-20 md:flex text-white items-center md:px-10 lg:px-20 xl:px-32 sticky top-0 select-none z-50"
    >
      <motion.a
        whileHover={{ rotate: 3 }}
        initial={{ y: "-200%" }}
        animate={{ y: 0, transition: { duration: 1 } }}
        href=""
        className="text-fuchsia-100 text-3xl font-semibold relative"
      >
        &lt;Ben /&gt;
      </motion.a>

      <motion.ul
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3, delayChildren: 1 }}
        className="flex h-full items-center gap-4 md:gap-6 lg:gap-14 xl:gap-20 text-xl ml-auto"
      >
        {navElements.map((item, index) => (
          <ElementNav key={item?.title} title={item?.title} icon={item?.icon} />
        ))}
      </motion.ul>
    </motion.nav>
  );
}

export default Nav;
