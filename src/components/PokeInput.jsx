import { useState, useEffect, useMemo } from "react";
import { Fetching } from "../helpers/fetching";
import { Link, useNavigate } from "react-router-dom";
import { render } from "@testing-library/react";

export function PokeInput() {
  const [pokeName, setPokeName] = useState("");
  const [pokeData, setPokeData] = useState("");
  const [pokeid, setPokeid] = useState("");
  const navigate = useNavigate();

  useMemo(() => {
    console.log("¡Plin! Estamos usando useEffect");

    try {
      console.log("Im in");
      navigate(`/pokemon/old/${pokeData.id}`);
    } catch (error) {
      alert("No se ha encontrado el Pokémon " + pokeName);
    }
  }, [pokeData]);

  function handleClick(e) {
    console.log("Quieres buscar a " + pokeName + ". Iniciando fetch...");
    const myurl = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`;
    console.log(myurl);
    Fetching(myurl).then((val) => setPokeData(val));

    console.log("¡Fetch completo! " + pokeName + " es el ID nº" + pokeData.id);
    console.log(pokeData);
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
