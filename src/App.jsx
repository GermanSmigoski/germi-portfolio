import { Footer, Header } from "./layout/index.jsx";
import { About, Skills, Proyect, Home } from "./components/index.jsx";

function App() {
  return (
    <div className="App">
      <nav>
        <Header />
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section>
        <Proyect id="proyects" />
      </section>
      <footer>
        <Footer> </Footer>
      </footer>
    </div>
  );
}

export default App;
