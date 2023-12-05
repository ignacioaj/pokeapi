import { Fetching } from "./fetching";
import { useState, useEffect } from "react";

export function GetPokes() {
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    Fetching(api_url, setPokeList);
  }, []);
}
