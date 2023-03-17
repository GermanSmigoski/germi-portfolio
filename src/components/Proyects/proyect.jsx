import React from "react";
import "./proyect.css";

export function Proyect() {
  return (
    <div className="proyects" id="proyects">
      <h1>Proyects</h1>
      <div className="cards">
        <div className="card">
          <img src="/hostel.png" alt="hostel"></img>
          <h2>Dinamita Hostel</h2>
          <p className="infoHover">
            INFO <span>*hover*</span>
          </p>
          <p className="card-description">
            Single Page Application acerca de un hostel, es un proyecto grupal
            destinado a dueños de Hostel que deseen tener su propia página web,
            donde se puede haer gestion sobre las habitaciones. Por mi parte
            aporte en el formulario de creacion y actividad de las habitaciones
            para la subida de imágenes en el form
          </p>
          <div className="skillsProyect">
            <span>React</span>
            <span>Redux</span>
            <span>Boostrap</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>PostgreSQL</span>
          </div>
          <div className="cardLink">
            <a href="https://hostel-project.vercel.app/" target="_blank">
              <span>Deploy</span>
            </a>
            <a href="https://github.com/kripto-c/HostelProject" target="_blank">
              <span>Repositorio</span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="pokemons.png" alt="pokemons" />
          <h2>Pokemons Proyect</h2>
          <p className="infoHover">
            INFO <span>*hover*</span>
          </p>
          <p className="card-description">
            Proyecto individual para el bootcamp soy Henry con temática de
            Pokemons, es una single-page application con barra de búsqueda,
            formulario de creación de juegos, filtrado y ordenado de los mismos
          </p>
          <div className="cardLink">
            <a
              href="https://github.com/GermanSmigoski/Pokedex-proyect"
              target="_blank"
            >
              <span>Repositorio</span>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="videogames.png" alt="videogames" />
          <h2>Videogames Proyect</h2>
          <p className="infoHover">
            INFO <span>*hover*</span>
          </p>
          <p className="card-description">
            Proyecto individual para el bootcamp soy Henry con temática de
            videojuegos, es una single-page application con barra de búsqueda,
            formulario de creación de juegos, filtrado y ordenado de los mismos
          </p>
          <div className="cardLink">
            <a
              href="https://github.com/GermanSmigoski/Videogames-proyect"
              target="_blank"
            >
              <span>Repositorio</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
