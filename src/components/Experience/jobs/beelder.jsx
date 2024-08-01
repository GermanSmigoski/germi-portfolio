import React from "react";
import "../experience.css";

export function Beelder() {
  return (
      <div class="content">
        <div className="experience-title">
          <h2>Beelder</h2>
          <h3>(december 2023 - april 2024)</h3>
        </div>
        <h4>FullStack Developer</h4>
        <p className="experience-text">
          Worked as a fullstack developer using Next.js for the front-end,
          Mantine for styling, and Nest.js for the back-end. Created seamless
          user experiences and robust server-side functionality, ensuring high
          performance and maintainability in web applications.
        </p>
        <div>
          <h3>Technologies: </h3>
          <div className="experience-tech">
            <div className="experience-box">
              <div className="tech-box">
                <h5 className="tech-title">ChatGPT</h5>
                <img
                  style={{
                    height: "35px",
                    widows: "35px",
                  }}
                  src="https://lucasmigoski.s3.amazonaws.com/openai.png"
                />
              </div>
              <div className="tech-box">
                <h5 className="tech-title">Apify</h5>
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src="https://lucasmigoski.s3.amazonaws.com/apify.png"
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
              <div className="tech-box">
                <h5 className="tech-title">NestJS</h5>
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src="https://lucasmigoski.s3.amazonaws.com/nest.png"
                />
              </div>
              <div className="tech-box">
                <h5 className="tech-title">MongoDB</h5>
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src="https://lucasmigoski.s3.amazonaws.com/mongo.png"
                />
              </div>
              <div className="tech-box">
                <h5 className="tech-title">Redis</h5>
                <img
                  style={{
                    height: "35px",
                    width: "35px",
                  }}
                  src="./redis.png"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
