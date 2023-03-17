import React from "react";
import "./footer.css";

export function Footer() {
  return (
    <div>
      <div className="footer">
        <h1>German Smigoski</h1>
        <div className="redes">
          <a
            href="https://www.linkedin.com/in/german-smigoski-84323a252/"
            target="_blank"
          >
            <img
              style={{ height: "50px", width: "50px" }}
              src="/linkedin.svg"
            />
          </a>
          <a href="https://github.com/GermanSmigoski" target="_blank">
            <img style={{ height: "50px", width: "50px" }} src="/github.svg" />
          </a>

          <a href="mailto:germansmigoski2@gmail.com">
            <img src="gmail.svg" alt="gmail" />
          </a>
        </div>
      </div>
    </div>
  );
}
