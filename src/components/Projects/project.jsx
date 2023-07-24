import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"; // Importa el icono de información
import "./project.css";
import { infoProjects } from "./info";

export function Project() {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="projects" id="projects">
      <h1>Projects:</h1>
      <div className="project-grid">
        {infoProjects &&
          infoProjects.es.map((project) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={`${project.name} image`}
                className={`project-image ${showDescription ? "hidden" : ""}`}
              />
              <h3 className="project-title">{project.nombre}</h3>
              <button onClick={toggleDescription} className="info-button">
                <FaInfoCircle />
              </button>
              {showDescription && (
                <p className="project-description">{project.descripcion}</p>
              )}
              <div
                className={`project-links ${showDescription ? "hidden" : ""}`}
              >
                <a
                  href={project.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Repositorio
                </a>
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Despliegue
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
