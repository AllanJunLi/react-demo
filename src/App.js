import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonContext from "./PokemonContext";

function App() {
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  }, []);

  if (!pokemons) {
    return <div>Loading ...</div>;
  }

  return (
    <PokemonContext.Provider
      value={{
        filter,
        setFilter,
        selectedPokemon,
        setSelectedPokemon,
        pokemons,
        setPokemons,
      }}
    >
      <div className="container">
        <h1>Pokemon Search</h1>

        <div className="twoColumnLayout">
          <div>
            <PokemonFilter />
            <PokemonTable />
          </div>
          <PokemonInfo />
        </div>
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
