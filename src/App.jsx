import logo from "./logo.svg";
import "./App.css";
import { PokeCard } from "./PokeCard";
import { PokeDisplay } from "./PokeDisplay";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Pokedex } from "./Pokedex";

function App() {
  const size = 20;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="pokemon" element={<Pokedex />} />
        <Route path="pokemon/old" element={<PokeCard size={size} />} />
        <Route path={`pokemon/old/:pkid`} element={<PokeDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
