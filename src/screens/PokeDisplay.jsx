import { useParams } from "react-router-dom";
import { Fetching } from "../helpers/fetching";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokeDisplay() {
  let { pkid } = useParams();
  const sprite_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkid}.png`;
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    Fetching(`https://pokeapi.co/api/v2/pokemon/${pkid}/`).then((val) =>
      setPoke(val)
    );
  }, []);

  return (
    <>
      <picture>
        <img src={sprite_url} />
        <h4>
          {String(poke.name).charAt(0).toUpperCase() +
            String(poke.name).slice(1)}
        </h4>
        <h6>Peso: {poke.weight} Kg</h6>
        <h6>Altura: {poke.height} cm</h6>
        <h6>
          Tipo(s):{" "}
          {poke.types?.map((el) => (
            <div>
              {String(el.type.name).charAt(0).toUpperCase() +
                String(el.type.name).slice(1)}
            </div>
          ))}
        </h6>
      </picture>
      <Link to="/pokemon">
        <button>
          <p>Volver a Pokédex</p>
        </button>
      </Link>
      <p> </p>
      <Link to="/">
        <button>
          <p>Volver a Inicio</p>
        </button>
      </Link>
    </>
  );
}
