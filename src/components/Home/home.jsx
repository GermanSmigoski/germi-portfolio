import { border } from "@chakra-ui/react";
import React from "react";
import "./home.css";

export function Home() {
  return (
    <div className="homeContainer" id="home">
      <div className="homeInfo">
        <h2>Hola, soy German Smigoski</h2>
        <h3>Fullstack Web Developer</h3>
        <p>From Argentina</p>
      </div>
      <img style={{width:'350px', height:'250px', borderRadius:'10px'}} src="germi.JPG" alt=""></img>
    </div>
  );
}
