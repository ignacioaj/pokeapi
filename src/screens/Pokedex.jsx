import { Link } from "react-router-dom";
import { Selector } from "../components/Selector";
import PokeTable from "../components/PokeTable/PokeTable";
import { useState, useEffect } from "react";
import { capitalize } from "../helpers/capitalize";
export default function Pokedex() {
  const [searchTypes, setSearchTypes] = useState([
    { label: "", value: "" },
    { label: "", value: "" },
  ]);

  const sendTypes = (selectedTypes) => {
    setSearchTypes(selectedTypes);
  };

  return (
    <body>
      <h1>¡Bienvenid@ a la Pokédex Nacional!</h1>
      <div>
        <Selector sendTypes={sendTypes} setParentState={setSearchTypes} />
      </div>

      <div>
        <PokeTable ptypes={searchTypes} />
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
}
