import React from "react";
import Project from "./Project";
import myProjects from "./myProjects";
import { Element } from "react-scroll";
import { useLanguage } from "@/contexts/languageContext";
import { AnimatePresence, motion } from "framer-motion";

function Projects() {
  const { language } = useLanguage();
  return (
    <Element
      name="projects"
      className="text-white z-20 text-4xl px-10 flex flex-col item-center justify-center text-center gap-10"
    >
      <AnimatePresence mode="popLayout">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0}}
          viewport={{ once: true }}
          key={language}
        >
          {language === "FR" ? "Mes projets" : "My Projects"}
        </motion.p>
      </AnimatePresence>
      <div className="flex flex-col gap-6">
        {myProjects.map((item, index) => (
          <Project
            key={item?.name + index}
            name={item?.name}
            image={item?.image}
            description={item?.description}
            href={item?.href}
            front={item?.front}
            back={item?.back}
            technos={item?.technos}
            git={item?.git}
            index={index}
          />
        ))}
      </div>
    </Element>
  );
}

export default Projects;
