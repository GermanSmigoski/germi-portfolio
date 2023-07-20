import React from "react";
import "./home.css";

export function Home() {
  return (
    <div className="homeContainer" id="home">
      <div className="homeInfo">
        <h2>Hola, soy German Smigoski</h2>
        <h3>Fullstack Web Developer</h3>
        <p>From Argentina</p>
        <span>
          <a
            className="linkedin-home"
            href="https://github.com/GermanSmigoski"
            target="_blank"
          >
            <img src="/github.svg" />
          </a>
          <a
            className="github-home"
            href="https://www.linkedin.com/in/german-smigoski-84323a252/"
            target="_blank"
          >
            <img src="/linkedin.svg" />
          </a>
        </span>
      </div>
      <img src="germi.webp" alt="home photo mine"></img>
    </div>
  );
}
