import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";
import { PokeDisplay } from "./PokeDisplay";
import { Route, Routes, Link } from "react-router-dom";
import { GetPokeID } from "./helpers/GetPokeID";
import { Selector } from "./Selector";

export const PokeCard = (size) => {
  const api_url = "https://pokeapi.co/api/v2/pokemon";
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    Fetching(api_url, setPokeList);
  }, []);

  console.log(pokeList);
  const pokemon_id = 0;

  return (
    <>
      <h1>Selecciona a tu Pokémon favorito</h1>

      <p></p>
      {pokeList.map((pokemon, index) => (
        <div>
          <Link to={String(index + 1)}>
            {String(pokemon.name).charAt(0).toUpperCase() +
              String(pokemon.name).slice(1)}
          </Link>
        </div>
      ))}
      <p></p>
      <div>
        <Link to="/">
          <button>
            <p>Volver a Inicio</p>
          </button>
        </Link>
      </div>
    </>
  );
};
