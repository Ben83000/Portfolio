import React, { useContext, useEffect, useState } from "react";
import Project from "./Project";
import myProjects from "./myProjects";
import { Element } from "react-scroll";

function Projects() {

  return (
    <Element name="projects" className="text-white text-4xl px-10 flex flex-col item-center justify-center text-center gap-10">
      <p>Mes projets</p>
      <div className="flex flex-col gap-6">
        {myProjects.map((item, index) =>
          
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
          
        )}
      </div>
    </Element>
  );
}

export default Projects;
