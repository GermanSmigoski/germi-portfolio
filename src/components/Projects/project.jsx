import React, { useState } from "react";
import "./project.css";
import { infoProjects } from "./info";

export function Project() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === infoProjects.es.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? infoProjects.es.length - 1 : prevIndex - 1
    );
  };

  // Move the currentProject declaration here after setting the index
  const currentProject = infoProjects.es[currentProjectIndex];

  return (
    <section className="proyects" id="proyects">
      <h1>Proyects</h1>
      <div className="slider-container">
        <button onClick={prevProject}>Previous</button>
        <div className="card">
          <img src={currentProject.img} alt={currentProject.name} />
          <div className="card-info">
            <h2>{currentProject.nombre}</h2>
            <p>{currentProject.descripcion}</p>
            <div className="card-skills">
              {currentProject.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="card-links">
              {currentProject.deploy && (
                <p>
                  Deploy:
                  <a href={currentProject.deploy} target="_blank">
                    <span>{currentProject.deploy}</span>
                  </a>
                </p>
              )}
              <p>
                Repositiorio:
                <a href={currentProject.repositorio} target="_blank">
                  <span>{currentProject.repositorio}</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <button onClick={nextProject}>Next</button>
      </div>
    </section>
  );
}
