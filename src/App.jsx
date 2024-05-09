import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import MyProjects from "./components/MyProjects";
import Skills from "./components/Skills";
import Hero from "./pages/Hero";

function App() {
  return (
    <div className="bg-gris_claro bg-desktop bg-no-repeat bg-cover bg-fixed">
      <Header />

      <Hero />
      <AboutMe />
      <Skills />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;
