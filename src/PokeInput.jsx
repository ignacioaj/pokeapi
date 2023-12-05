import { useParams } from "react-router-dom";
import { Fetching } from "./helpers/fetching";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const PokeInput = () => {
  return (
    <>
      <form>
        <label>
          Nombre:
          <input type="text" />
        </label>
        <input type="submit" value="Buscar" />
      </form>
    </>
  );
};
