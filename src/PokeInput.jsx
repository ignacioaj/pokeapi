import { useState, useEffect } from "react";
import { Fetching } from "./helpers/fetching";
import { Link, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

export function PokeInput() {
  const [firstName, setFirstName] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState("");
  const [pokeid, setPokeid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("¡Plin! Estamos usando useEffect");

    if (pokeData?.id) {
      navigate(`/pokemon/${pokeData.id}`);
    } else if (pokeName !== "") {
      alert("No se ha encontrado el Pokémon " + pokeName);
    }
  }, [pokeData]);

  const pokemonLocate = () => {
    console.log("¡Plin! Se está ejecutando PokemonLocate()");
    console.log("Quieres buscar a " + pokeName + ". Iniciando fetch...");
    const myurl = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    Fetching(myurl, setPokeData);

    console.log("¡Fetch completo! " + pokeName + " es el ID nº" + pokeid);
  };

  function handleClick(e) {
    pokemonLocate();
    console.log(pokeData);

    console.log(pokeName + " es el ID nº" + pokeid);
  }

  return (
    <>
      <label>
        Nombre:
        <input
          value={pokeName}
          onChange={(e) => setPokeName(e.target.value)}
          type="text"
        />
        <button onClick={(e) => handleClick(e)}>Buscar</button>
      </label>
    </>
  );
}
