import React, { useState } from "react";
import Scroll from "./Scroll";
import { PokeCard } from "./PokeCard";

export const PokeSearch = ({ details }) => {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchField.toLowerCase()) ||
      pokemon.email.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function pokeCard() {
    return (
      <Scroll>
        <PokeCard filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search your course</h2>
      </div>
      <div className="pa2">
        <input
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search People"
          onChange={handleChange}
        />
      </div>
      {pokeCard()}
    </section>
  );
};

export default PokeSearch;
