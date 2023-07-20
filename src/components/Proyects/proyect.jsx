import React from "react";
import "./proyect.css";
import { infoProyects } from "./info";

export function Proyect() {
  return (
    <div className="proyects" id="proyects">
      <h1>Proyects</h1>
      <div className="cards">
        {infoProyects.es.map((proyect) => (
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
                  <p>
                    Deploy:
                    <a href={proyect.deploy} target="_blank">
                      <span>{proyect.deploy}</span>
                    </a>
                  </p>
                )}
                <p>
                  Repositiorio:
                  <a href={proyect.repositorio} target="_blank">
                    <span>{proyect.repositorio}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
