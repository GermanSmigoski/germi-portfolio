import React from "react";
import "./proyect.css";

export function Proyect() {
  return (
    <div className="proyects" id="proyects">
      <h1>Proyects</h1>
      <div className="cards">
        <div className="card">
          <img src="/hostel.png" alt="hostel"></img>
          <h2>Dinamita Hostel</h2>
          <p className="card-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            velit, inventore ducimus reiciendis libero harum quam numquam ut
            quod similique. Praesentium fugit magnam iste. Necessitatibus
            consectetur repellendus quas eos animi.
          </p>
        </div>
        <div className="card">
          <img src="pokemons.png" alt="pokemons" />
          <h2>Pokemons Proyect</h2>
          <p className="card-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
            eveniet ducimus rem, eum perferendis fugiat provident tempore! Quo
            ipsa suscipit id autem eius sint voluptatum illum saepe iure
            reprehenderit? Delectus!
          </p>
        </div>
        <div className="card">
          <img src="videogames.png" alt="videogames" />
          <h2>Videogames Proyect</h2>
          <p className="card-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam nam
            ducimus nulla esse labore. Eligendi unde laboriosam voluptatum
            pariatur asperiores maiores esse ducimus libero in nesciunt! Est
            perspiciatis hic dolor!
          </p>
        </div>
      </div>
    </div>
  );
}
