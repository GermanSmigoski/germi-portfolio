import React from "react";
import "./proyect.css";
import { infoProyects } from "./info";

export function Proyect() {
  return (
    <div className="proyects" id="proyects">
      <h1>Proyects</h1>
      <div className="cards">
        {infoProyects.data.map((proyect) => (
          <div key={proyect.id} className="card">
            <img src={proyect.img} alt={proyect.name}></img>
            <div className="card-info">
              <h2>{proyect.nombre}</h2>
              <p>{proyect.descripcion}</p>
              <div className="card-skills">
                {proyect.skills.map((skill) => (
                  <p key={skill}>{skill}</p>
                ))}
              </div>
              <div className="card-links">
                {proyect.deploy && (
                  <a href={proyect.deploy} target="_blank">
                    <p>Deploy:{proyect.deploy}</p>
                  </a>
                )}
                <a href={proyect.repositorio} target="_blank">
                  <p>Repositiorio: {proyect.repositorio}</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
