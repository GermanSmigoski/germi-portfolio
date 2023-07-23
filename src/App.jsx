import { useState } from "react";
import { Footer, Header } from "./layout/index.jsx";
import { About, Skills, Project, Home } from "./components/index.jsx";

function App() {
  const [darkMode, setDarkMode] = useState("false");
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app" : "app-dark"}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Home />
      <About />
      <Project />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
