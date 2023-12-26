import { Fetching } from "../../helpers/fetching";
import { createData } from "./createData";
import { useState, useEffect, useMemo } from "react";
import { GetPokeID } from "../../helpers/GetPokeID";

export function useSelectedTypes(type1) {
  const [pokeList, setPokeList] = useState([]);
  const [onePokeRow, setOnePokeRow] = useState([]);
  let rows = [];
  let filterprops = [];
  let pokeurl = "";

  useMemo(() => {
    setPokeList([]);

    if (type1[1] == undefined) {
      if (type1[0] == undefined) {
      } else {
        filterprops.push(type1[0]?.label);
      }
    } else {
      filterprops.push(type1[0]?.label);
      filterprops.push(type1[1]?.label);
    }

    console.log("Hello from hook! Selected types: " + filterprops.length);
    console.log(filterprops);
    console.log("Hello from hook! Type 1: " + type1[0]?.label);
    console.log(type1);
    console.log("Hello from hook! Type 2: " + type1[1]?.label);

    if (filterprops.length == 0 || type1[0]?.label == "") {
      Fetching("https://pokeapi.co/api/v2/pokemon").then((data) =>
        setPokeList(data)
      );
    } else if (filterprops.length == 1) {
      Fetching(
        `https://pokeapi.co/api/v2/type/${filterprops[0].toLowerCase()}/`
      ).then((data) => {
        setPokeList(data[0]?.pokemon);
      });
    } else {
      Fetching(
        `https://pokeapi.co/api/v2/type/${filterprops[0].toLowerCase()}/`
      ).then((data) => {
        setPokeList(data[0]?.pokemon);
      });
    }

    console.log("PokeList:");
    console.log(pokeList);

    pokeList?.map((pokemon) => {
      pokeurl = pokemon.url;
      Fetching(pokeurl).then((data) => {
        setOnePokeRow((n) => [...n, createData(data)]);
        console.log("row add: ", onePokeRow);
      });
    });
  }, [type1[0], type1[1]]);

  return onePokeRow;
}
