// src/components/SearchList.js

import React from "react";
import { PokeCard } from "../PokeCard";

function SearchPoke({ filteredPokemons }) {
  const filtered = filteredPokemons.map((poke) => (
    <PokeCard key={poke.id} person={poke} />
  ));
  return <div>{filtered}</div>;
}
