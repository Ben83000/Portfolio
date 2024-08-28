import { useState } from "react";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Background from "./components/background/Background";

function App() {
  return (
    <section className="relative font-dosis flex flex-col w-full h-full">
      <ParticlesBackground />
      <Nav />
      <MobileNav />
      <Home />
      <main className="w-full">
        <About />
      </main>
    </section>
  );
}

export default App;
