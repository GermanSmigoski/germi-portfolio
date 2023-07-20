import { useState } from "react";
import { Footer, Header } from "./layout/index.jsx";
import { About, Skills, Project, Home } from "./components/index.jsx";

function App() {
  const [darkMode, setDarkMode] = useState("false");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app' : 'app-dark'}>
      <nav>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section>
        <Project id="proyects" />
      </section>
      <section id="skills">
        <Skills />
      </section>

      <footer>
        <Footer> </Footer>
      </footer>
    </div>
  );
}

export default App;
