import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Skills() {
  const [images, setImages] = useState([]);

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
    <motion.section
    initial={{ scale: 0}}
    whileInView={{ scale: 1, transition: { duration: 1}}}
    viewport={{ once: true }}
     className="banner">
      <motion.div 
      className="slider" style={{ "--quantity": images.length }}>
        {images.map((item, index) => (
          <motion.div
            className="item border border-fuchsia-400 bg-fuchsia-400/10 p-2 rounded-3xl"
            key={index}
            style={{ "--position": index }}
          >
            <img src={item} alt="" className="" />
          </motion.div>
        ))}
      </motion.div>
      <div className="content">
        <h1 data-content="COMPÉTENCES" className="mx-auto">COMPÉTENCES</h1>
        <motion.div
          animate={{
            y: [
              1, 3, 5, 7, 9, 7, 5, 3, 1, -1, -3, -5, -7, -9, -7, -5, -3, -1, 1,
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
  );
}

export default Skills;
