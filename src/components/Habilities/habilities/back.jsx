import React from "react";
import "../habilities.css";

export function BackSkills() {
  return (
    <div className="backEnd">
      <h2>Back End:</h2>
      <div className="box">
        <span>NodeJS</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
      </div>
      <div className="box">
        <span>NestJS</span>
        <img src="https://lucasmigoski.s3.amazonaws.com/nest.png"></img>
      </div>
      <div className="box">
        <span>Express</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"></img>
      </div>
      <div className="box">
        <span>Sequelize</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"></img>
      </div>
      <div className="box">
        <span>PostgreSQL</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"></img>
      </div>
      <div className="box">
        <span>GraphQL</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"></img>
      </div>
      <div className="box">
        <span>MongoDB</span>
        <img src="https://lucasmigoski.s3.amazonaws.com/mongo.png"></img>
      </div>
    </div>
  );
}
