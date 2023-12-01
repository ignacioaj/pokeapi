import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";

export const PokeDisplay = ({ pk_name, pk_url }) => {
  const pokeId = pk_url.split("/")[6];
  const sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

  return (
    <picture>
      <img src={sprite_url} />
      {pk_name}
    </picture>
  );
};
