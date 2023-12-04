import logo from "./logo.svg";
import "./App.css";
import { PokeCard } from "./PokeCard";
import { PokeDisplay } from "./PokeDisplay";
import { Routes, Route, useParams } from "react-router-dom";
import { Inicio } from "./Inicio";

function App() {
  const size = 20;
  let { pkmn_id } = 1;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="pokemon" element={<PokeCard size={size} />} />
        <Route path={`pokemon/:pkid`} element={<PokeDisplay />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
