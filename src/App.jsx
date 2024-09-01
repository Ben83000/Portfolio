import { useState } from "react";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import { ModalContextProvider } from "./contexts/modalContext";
import Modal from "./components/modal/Modal";
import { ScreenContextProvider } from "./contexts/screenContext";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <ModalContextProvider>
      <ScreenContextProvider>
        <Modal />
        <section className="relative font-dosis flex flex-col w-full h-full">
          <ParticlesBackground />
          <header>
            <Nav />
            <MobileNav />
            <Home />
            
          </header>

          <main className="flex flex-col gap-10">
            <Projects />
            <Skills />
            <About />
          </main>
        </section>
      </ScreenContextProvider>
    </ModalContextProvider>
  );
}

export default App;
