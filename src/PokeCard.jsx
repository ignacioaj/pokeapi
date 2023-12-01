import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";
import { PokeDisplay } from "./PokeDisplay";

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
        <PokeDisplay pk_name={pokemon.name} pk_url={pokemon.url} />
      ))}
    </ol>
  );
};
