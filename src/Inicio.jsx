import { Link } from "react-router-dom";
import { PokeInput } from "./PokeInput";
import { Selector } from "./Selector";
import PokeTable from "./PokeTable";

export const Inicio = () => {
  return (
    <body>
      <h1>¡Bienvenido a la PokeApi hecha en React!</h1>
      <h3>Estamos en Vercel y GitHub:D</h3>
      <div>
        <Link to="/pokemon">
          <button>
            <p>Ver Pokédex</p>
          </button>
        </Link>
      </div>
      <p>O quizá prefieras encontrar directamente a un Pokémon por su...</p>
      <div>
        <PokeInput />
      </div>

      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
        />
      </div>
    </body>
  );
};
