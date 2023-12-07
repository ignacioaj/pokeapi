import { Link } from "react-router-dom";
import { PokeInput } from "./PokeInput";
import { Selector } from "./Selector";

export const Search = () => {
  return (
    <body>
      <h1>¡Hagamos una búsqueda refinada!</h1>
      <div>
        <Selector />
      </div>
    </body>
  );
};
