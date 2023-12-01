import logo from "./logo.svg";
import "./App.css";
import { PokeCard } from "./PokeCard";

function App() {
  const size = 20;

  return (
    <>
      <h3>Hola, estamos en GitHub y Vercel :D</h3>
      <PokeCard size={size} />
    </>
  );
}

export default App;
