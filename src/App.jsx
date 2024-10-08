import ParticlesBackground from "./components/particles/ParticlesBackground";
import Nav from "./components/nav/Nav";
import MobileNav from "./components/mobileNav/MobileNav";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Projects from "./components/pages/projects/Projects";
import { ModalContextProvider } from "./contexts/modalContext";
import Modal from "./components/modal/Modal";
import { ScreenContextProvider } from "./contexts/screenContext";
import Skills from "./components/pages/skills/Skills";
import Footer from "./components/footer/Footer";
import Fun from "./components/fun/Fun";
import { LanguageContextProvider } from "./contexts/languageContext";
import { ScrollContextProvider } from "./contexts/scrollContext";

function App() {
  return (
    <ScrollContextProvider>
      <LanguageContextProvider>
        <ModalContextProvider>
          <ScreenContextProvider>
            <Modal />
            <section className="relative font-dosis flex flex-col w-full h-full gap-10">
              <ParticlesBackground />
              <Nav />
              <MobileNav />

              <header>
                <Home />
              </header>

              <main className="flex flex-col gap-10">
                <Projects />
                <Skills />
                <About />
                <Fun />
              </main>

              <footer>
                <Footer />
              </footer>
            </section>
          </ScreenContextProvider>
        </ModalContextProvider>
      </LanguageContextProvider>
    </ScrollContextProvider>
  );
}

export default App;
