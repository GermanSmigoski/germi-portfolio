import React, { useState } from "react";
import "./header.css";
export function Header() {
  const [open, setOpen] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 252) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener("scroll", setFixed);

  return (
    <div className={fix ? "header fix" : "header"}>
      <a href="#home">
        <h1>German R. Smigoski</h1>
      </a>
      <div className={`links ${open ? "active" : ""}`}>
        <a className="home" onClick={() => setOpen(!open)} href="#">
          <h4>Home</h4>
        </a>
        <a onClick={() => setOpen(!open)} href="#about">
          <h4>About Me</h4>
        </a>
        <a onClick={() => setOpen(!open)} href="#skills">
          <h4>Skills</h4>
        </a>
        <a onClick={() => setOpen(!open)} href="#proyects">
          <h4>Proyects</h4>
        </a>
        <a onClick={() => setOpen(!open) }href="GermanSmigoski.pdf" download>
          <button>Resume</button>
        </a>
      </div>
      <div
        className={`burguer ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
