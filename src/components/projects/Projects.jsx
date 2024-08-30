import React, { useContext } from "react";
import desktop from "../../assets/projects/sugbreak/desktop.png";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons/faAdd";
import { ModalContext } from "../../contexts/modalContext";
import Project from "../modal/project/project";
import Carousel from "../carousel/Carousel";
import Button from "../ui/button/Button";

function Projects() {
  const { openModal } = useContext(ModalContext);

  const handleScreenshots = (e) => {
    openModal(<Carousel project="sugbreak" />, e.clientX, e.clientY);
  };

  const handleDetails = (e) => {
    openModal(<Carousel project="sugbreak" />, e.clientX, e.clientY);
  };

  const handleDemo = (e) => {
    openModal(<Carousel project="sugbreak" />, e.clientX, e.clientY);
  };

  return (
    <section className="text-white text-4xl px-10 flex flex-col item-center justify-center text-center gap-10">
      <p>Mes projets</p>
      <motion.div
        animate={{
          y: [0, -10, 0],
          boxShadow: [
            "0 10px 30px rgba(217, 70, 239, 0.2), 0 5px 20px rgba(217, 70, 239, 0.30)",
            "0 15px 35px rgba(217, 70, 239, 0.25), 0 10px 25px rgba(217, 70, 239, 0.35)",
            "0 10px 30px rgba(217, 70, 239, 0.2), 0 5px 20px rgba(217, 70, 239, 0.30)",
          ],
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        whileHover={{ boxShadow: "0px 10px 35px rgba(217, 70, 239, 0.60)" }}
        className="flex gap-6 mx-auto h-60 w-[768px] px-10 backdrop-blur-sm rounded-xl overflow-hidden border-opacity-40 border border-t-0 border-fuchsia-600"
      >
        <img src={desktop} alt="" className="" />
        <div className="py-6 flex flex-col">
          <p className="text-lg">
            Application web moderne from scratch 100% custom pour un Fast Food
            sucré. (crépes, pancakes, glaces..)
          </p>
          <p className="text-lg">
            Front: Reactjs, Tailwind, Shadcn-ui, Yup, Socket.IO
          </p>
          <p className="text-lg">
            Back: Nodejs, Express, MongoDB (mongoose), Resend
          </p>
          <div className="flex text-xl justify-evenly mt-auto gap-2">
            <Button text="Screenshots" type="shadow" onClick={handleScreenshots} />
            <Button text="Détails" type="shadow" />
            <Button text="Démo" type="shadow" href="https://gentle-citadel-85847-6ce2d6bf71ee.herokuapp.com/" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
