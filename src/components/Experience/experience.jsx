import React from "react";
import "./experience.css";
import { Icon } from "@chakra-ui/react";
import { Void } from "./jobs/void";
import { Beelder } from "./jobs/beelder";

export function Experience() {
  return (
    <section className="timeline-section">
      <h1>Experience:</h1>
      <div className="timeline">
        <div className="timeline-item right">
          <Void />
        </div>
        <div className="timeline-item left">
          <Beelder />
        </div>
      </div>
    </section>
  );
}
