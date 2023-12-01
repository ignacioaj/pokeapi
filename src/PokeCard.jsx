import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";

export const PokeCard = (size) => {
  const api_url = "https://pokeapi.co/api/v2/pokemon";
  const [pokeList, setPokeList] = useState([]);

  useEffect(async () => {
    setPokeList(await Fetching(api_url));
  }, []);

  console.log(pokeList);

  return (
    <ol>
      {pokeList.map((pokemon) => (
        <li>{pokemon.name}</li>
      ))}
    </ol>
  );
};
