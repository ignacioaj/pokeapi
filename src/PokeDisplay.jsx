import { useParams } from "react-router-dom";
import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";

export const PokeDisplay = () => {
  let { pkid } = useParams();
  const sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkid}.png`;
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    Fetching(`https://pokeapi.co/api/v2/pokemon/${pkid}/`, setPoke);
  }, []);

  console.log(poke);

  return (
    <>
      <picture>
        <img src={sprite_url} />
        <h6>
          {String(poke.name).charAt(0).toUpperCase() +
            String(poke.name).slice(1)}
        </h6>
        <h6>Peso: {poke.weight} Kg</h6>
        <h6>Altura: {poke.height} cm</h6>
      </picture>
    </>
  );
};
