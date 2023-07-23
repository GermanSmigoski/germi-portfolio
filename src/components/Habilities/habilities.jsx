import React from "react";
import "./habilities.css";

export function Skills() {
  return (
    <section id="skills" className="skillsContainer">
      <h1>Skills: </h1>
      <div className="boxSkills">
        <div className="frontEnd">
          <h2>Front End:</h2>
          <div className="box">
            <span>React</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
          </div>
          <div className="box">
            <span>Redux</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"></img>
          </div>
          <div className="box">
            <span>HTML</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"></img>
          </div>
          <div className="box">
            <span>CSS3</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"></img>
          </div>
          <div className="box">
            <span>SASS</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"></img>
          </div>
          <div className="box">
            <span>Tailwind</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"></img>
          </div>
          <div className="box">
            <span>Boostrap</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"></img>
          </div>
          <div className="box">
            <span>MUI</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"></img>
          </div>
        </div>
        <div className="backEnd">
          <h2>Back End:</h2>
          <div className="box">
            <span>Node.js</span>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></img>
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
        </div>
        <div>
          <div className="other">
            <h2>Tools :</h2>
            <div className="box">
              <span>JavaScript</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"></img>
            </div>
            <div className="box">
              <span>Github</span>
              <img
                style={{ filter: "invert(1)" }}
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              ></img>
            </div>
            <div className="box">
              <span>VS code</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"></img>
            </div>
            <div className="box">
              <span>Next.js</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"></img>
            </div>
            <div className="box">
              <span>Typescript</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
