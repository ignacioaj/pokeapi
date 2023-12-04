import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <body>
      <h1>¡Bienvenido a la PokeApi hecha en React!</h1>
      <h3>Estamos en Vercel y GitHub:D</h3>
      <Link to="/pokemon">
        <button>
          <p>Ver Pokémons!</p>
        </button>
      </Link>

      <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png`}
        />
      </div>
    </body>
  );
};
