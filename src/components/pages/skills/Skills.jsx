import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Element } from "react-scroll";
import { useLanguage } from "@/contexts/languageContext";

function Skills() {
  const [images, setImages] = useState([]);
  const { language } = useLanguage();

  useEffect(() => {
    const importAllImages = async () => {
      const imageModules = import.meta.glob("@/assets/skills/*.png");
      const imagesArray = await Promise.all(
        Object.values(imageModules).map((module) => module())
      );
      setImages(imagesArray.map((module) => module.default));
    };
    importAllImages();
  }, []);

  return (
    <Element name="skills">
      <motion.section
        initial={{ scale: 0 }}
        whileInView={{ scale: 1, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="banner z-20"
      >
        <motion.div className="slider" style={{ "--quantity": images.length }}>
          {images.map((item, index) => (
            <motion.div
              className="item border border-fuchsia-400 bg-fuchsia-400/10 p-2 rounded-3xl"
              key={index}
              style={{ "--position": index }}
            >
              <img src={item} alt="skill" />
            </motion.div>
          ))}
        </motion.div>
        <div className="content">
          <AnimatePresence mode="popLayout">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={language}
              data-content={language === "FR" ? "COMPÉTENCES" : "SKILLS"}
              className="mx-auto"
            >
              {language === "FR" ? "COMPÉTENCES" : "SKILLS"}
            </motion.h1>
          </AnimatePresence>
          <motion.div
            animate={{
              y: [
                1, 3, 5, 7, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -7, -5, -3, -1,
                1,
              ],
              scale: [0.8, 0.9, 0.8],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="model"
          ></motion.div>
        </div>
      </motion.section>
    </Element>
  );
}

export default Skills;
