import React, { useState } from "react";
import ElementNav from "./ElementNav";
import { AnimatePresence, motion } from "framer-motion";
import navElements from "./navElements";
import Toggle from "../ui/Toggle";
import { useScroll } from "@/contexts/scrollContext";
import { useLanguage } from "@/contexts/languageContext";

function Nav() {
  const { isTop } = useScroll();
  const [selectedMenuItem, setSelectedMenuItem] = useState("home");
  const { language } = useLanguage();

  const appearAnimation = {
    hidden: {
      y: "-200%",
    },
    visible: {
      y: 0,
    },
  };

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
      className="hidden h-16 md:flex text-white gap-4 items-center md:px-10 lg:px-20 xl:px-32 sticky top-0 select-none z-50"
    >
      <motion.p
        whileHover={{ rotate: 3 }}
        initial={{ y: "-200%" }}
        animate={{ y: 0, transition: { duration: 1 } }}
        className="text-fuchsia-100 text-3xl font-semibold relative"
      >
        &lt;Ben /&gt;
      </motion.p>
      <AnimatePresence mode="popLayout">
        <motion.ul
          key={language}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.3, delayChildren: 1 }}
          className="flex h-full items-center gap-4 md:gap-6 lg:gap-14 xl:gap-20 text-xl ml-auto"
        >
          {navElements.map((item, index) => (
            <ElementNav
              key={item?.id + index}
              title={language === "FR" ? item?.title?.fr : item?.title?.en}
              icon={item?.icon}
              id={item?.id}
              selectedMenuItem={selectedMenuItem}
              setSelectedMenuItem={setSelectedMenuItem}
            />
          ))}
        </motion.ul>
      </AnimatePresence>
      <motion.div variants={appearAnimation} initial="hidden" animate="visible" transition={{ delay: 2.2 }}>
        <Toggle />
      </motion.div>
    </motion.nav>
  );
}

export default Nav;
