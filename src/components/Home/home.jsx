import React from "react";
import "./home.css";

export function Home() {
  return (
    <section className="homeContainer" id="home">
      <div className="homeInfo">
        <h2>
          Hello, i'm <span>German Smigoski</span>
        </h2>
        <h3>Fullstack Web Developer</h3>
        <div className="nationality">
          <p>From Argentina</p>
          <img
            style={{ width: "90px", height: "80px", margin: 0 }}
            src="./argentina.png"
          />
        </div>
      </div>
      <img src="germi.webp" alt="home photo mine"></img>
    </section>
  );
}
