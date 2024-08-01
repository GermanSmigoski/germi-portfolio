import React from "react";
import "../habilities.css";

export function OtherSkills() {
  return (
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
        <span>Typescript</span>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"></img>
      </div>
    </div>
  );
}
