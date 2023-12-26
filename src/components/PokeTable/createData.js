import { capitalize } from "../../helpers/capitalize";

export function createData(pokemon) {
  const pokerow = {
    id: pokemon?.order,
    name: pokemon?.name,
    types:
      capitalize(pokemon.types[0]?.type.name) +
      " " +
      capitalize(pokemon.types[1]?.type.name),
    height: pokemon?.height * 10 ?? "Loading...",
    weight: pokemon?.weight ?? "Loading...",
  };

  return pokerow;
}
