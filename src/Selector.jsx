import React, { useState, useEffect } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { Fetching } from "./helpers/fetching";

export const Selector = () => {
  const [types, setTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  Fetching("https://pokeapi.co/api/v2/type", setTypes);

  useEffect(() => {
    selectedTypes.map((type, index) => {
      if (selectedTypes.length > 2) {
        setSelectedTypes([selectedTypes[1], selectedTypes[2]]);
      }
      console.log(`Buscando Pokemon con tipo #${index} : ${type.label}`);
    });
  }, [selectedTypes]);

  function handleChange(e) {
    setSelectedTypes(e);
  }

  function handleClick(e) {
    setSelectedTypes([]);
  }

  const animatedComponents = makeAnimated();
  let options = [];
  types.map((type, index) =>
    options.push({
      value: String(type.url),
      label:
        String(type.name).charAt(0).toUpperCase() + String(type.name).slice(1),
    })
  );

  return (
    <Select
      closeMenuOnSelect={false}
      value={selectedTypes}
      onChange={(e) => setSelectedTypes(e)}
      components={animatedComponents}
      defaultValue={options[0]}
      isMulti
      options={options}
    />
  );
};
