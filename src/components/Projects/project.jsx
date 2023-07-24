import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa"; // Importa el icono de información
import "./project.css";
import { infoProjects } from "./info";

export function Project() {
  const [projectDescriptions, setProjectDescriptions] = useState(
    infoProjects.es.map(() => false)
  );

  const toggleDescription = (index) => {
    const newDescriptions = [...projectDescriptions];
    newDescriptions[index] = !newDescriptions[index];
    setProjectDescriptions(newDescriptions);
  };

  return (
    <section className="projects" id="projects">
      <h1>Projects:</h1>
      <div className="project-grid">
        {infoProjects &&
          infoProjects.es.map((project, index) => (
            <div key={project.id} className="project-card">
              <img
                src={project.image}
                alt={`${project.name} image`}
                className={`project-image ${
                  projectDescriptions[index] ? "hidden" : ""
                }`}
              />
              <h3 className="project-title">{project.nombre}</h3>
              <button
                onClick={() => toggleDescription(index)}
                className="info-button"
              >
                <FaInfoCircle />
              </button>
              {projectDescriptions[index] && (
                <p className="project-description">{project.descripcion}</p>
              )}
              <div
                className={`project-links ${
                  projectDescriptions[index] ? "hidden" : ""
                }`}
              >
                <a
                  href={project.repositorio}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Repository
                </a>
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See deploy
                  </a>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
