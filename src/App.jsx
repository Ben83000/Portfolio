import { useState } from "react";
import ParticlesBackground from "./components/particles/ParticlesBackground";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Home from "./components/home/Home";


function App() {
  return (
      <main className="relative h-screen w-screen font-dosis">
        <ParticlesBackground />
        <header className="w-full ">
          <Nav />
          <MobileNav />
          <Home />
        </header>
      </main>
  );
}

export default App;
