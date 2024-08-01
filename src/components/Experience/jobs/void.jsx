import React from "react";
import "../experience.css";
export function Void() {
  return (
    <div class="content">
      <div className="experience-title">
        <h2>Void.GG</h2>
        <h3>(august 2023 - december 2023)</h3>
      </div>
      <h4>Backend Developer</h4>
      <p className="experience-text">
        Backend developer experienced in web scraping, utilizing MongoDB for
        NoSQL databases, implementing Bull queues, scheduling tasks with cron,
        and performing efficient CRUD operations. Skilled in optimizing
        processes and ensuring data integrity and availability in web
        applications.
      </p>
      <div>
        <h3>Technologies: </h3>
        <div className="experience-tech">
          <div className="experience-box">
            <div className="tech-box">
              <h5 className="tech-title">PostgresSQL</h5>
              <img
                style={{
                  height: "35px",
                  width: "35px",
                }}
                src="https://lucasmigoski.s3.amazonaws.com/postgresql.png"
              />
            </div>
            <div className="tech-box">
              <h5 className="tech-title">Express</h5>
              <img
                style={{
                  height: "35px",
                  width: "35px",
                }}
                src="https://lucasmigoski.s3.amazonaws.com/express.png"
              />
            </div>
          </div>
          <div className="experience-box">
            <div className="tech-box">
              <h5 className="tech-title">Typescript</h5>
              <img
                style={{
                  height: "35px",
                  width: "35px",
                }}
                src="https://lucasmigoski.s3.amazonaws.com/ts.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
