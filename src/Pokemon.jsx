import { GetPokeID } from "./helpers/GetPokeID";
import { useEffect, useState } from "react";
import { Fetching } from "./helpers/fetching";

export async function Pokemon(identifier) {
  const url = `https://pokeapi.co/api/v2/pokemon/${identifier}/`;
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    Fetching(url, setPokemon);
  }, []);

  const thispoke = {
    pkname: pokemon.name,
    id: pokemon.order,
    height: pokemon.height,
    weight: pokemon.weight,
  };

  return thispoke;
}
