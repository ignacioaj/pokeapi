import logo from "./logo.svg";
import "./App.css";
import { PokeCard } from "./PokeCard";

function App() {
  const size = 20;

  return (
    <>
      <PokeCard size={size} />
    </>
  );
}

export default App;
