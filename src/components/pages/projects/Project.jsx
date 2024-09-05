import React, { useContext } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/button/Button";
import Carousel from "@/components/carousel/Carousel";
import { ModalContext } from "@/contexts/modalContext";
import { useLanguage } from "@/contexts/languageContext";

function Project({
  name,
  image,
  description,
  href,
  git,
  technos,
  front,
  back,
  index,
}) {
  const { openModal } = useContext(ModalContext);
  const { language } = useLanguage();

  const handleScreenshots = (e) => {
    openModal(<Carousel project={name} />, e.clientX, e.clientY);
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: 0.5 } }}
      viewport={{ once: true }}
      animate={{
        y: [0, -10, 0],
        boxShadow: [
          "0 5px 20px rgba(217, 70, 239, 0.2), 0 5px 20px rgba(217, 70, 239, 0.30)",
          "0 10px 25px rgba(217, 70, 239, 0.25), 0 10px 25px rgba(217, 70, 239, 0.35)",
          "0 5px 20px rgba(217, 70, 239, 0.2), 0 5px 20px rgba(217, 70, 239, 0.30)",
        ],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
      whileHover={{ boxShadow: "0px 8px 25px rgba(217, 70, 239, 0.60)" }}
      className=" flex gap-6 mx-auto sm:h-60 w-full max-w-[768px] px-4 backdrop-blur-sm rounded-xl overflow-hidden border-opacity-40 border border-t-0 border-fuchsia-600"
    >
      <div className="aspect-square p-2 max-md:hidden">
        <img
          src={image}
          alt="project image"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      <div className="py-6 flex flex-col max-sm:gap-4">
        <div>
          <p className="text-lg">
            {language === "FR" ? description?.fr : description?.en}
          </p>
          {front && <p className="text-lg">Front: {front}</p>}
          {back && <p className="text-lg">Back: {back}</p>}
          {technos && <p className="text-lg">Technos: {technos}</p>}
        </div>
        <div className="flex max-sm:flex-col text-xl justify-evenly mt-auto gap-2">
          <Button
            text="Screenshots"
            type="shadow"
            onClick={handleScreenshots}
          />
          {git && <Button text="GitHub" type="shadow" href={git} />}
          {href && <Button text="Démo" type="shadow" href={href} />}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
