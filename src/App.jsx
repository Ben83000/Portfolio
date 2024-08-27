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
      <Background />
      <Nav />
      <MobileNav />
      <header className="w-full h-screen bg-white/10">
        <Home />
      </header>
      <main className="h-screen w-full">
        <About />
      </main>
      <div className="h-96"></div>
    </section>
  );
}

export default App;
