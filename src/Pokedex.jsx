import { Link } from "react-router-dom";
import { Selector } from "./Selector";
import PokeTable from "./PokeTable";
import { useState } from "react";

export const Pokedex = () => {
  const [searchTypes, setSearchTypes] = useState([]);
  function handleChange(e) {
    console.log("¡Plin! ¡Se ha cambiado la búsqueda por tipos!");
  }
  return (
    <body>
      <h1>¡Bienvenid@ a la Pokédex Nacional!</h1>
      <div>
        <Selector onChange={(e) => handleChange(e)} />
      </div>

      <div>
        <PokeTable />
      </div>

      <p></p>

      <div>
        <Link to="/">
          <button>
            <p>Volver a Inicio</p>
          </button>
        </Link>
        <line> </line>
        <Link to="/pokemon/old">
          <button>
            <p>Ver old Pokédex</p>
          </button>
        </Link>
      </div>
    </body>
  );
};
