import React from "react";
import "./habilities.css";
import { FrontSkills } from "./habilities/front";
import { BackSkills } from "./habilities/back";
import { OtherSkills } from "./habilities/other";

export function Skills() {
  return (
    <section id="skills" className="skillsContainer">
      <h1>Skills: </h1>
      <div className="boxSkills">
        <div>
          <FrontSkills />
          <BackSkills />
          <OtherSkills />
        </div>
      </div>
    </section>
  );
}
