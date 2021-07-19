import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

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
  /*
  Props drilling, pass state to components via props

  Issue 1: For multi-layer components, the between layer components probably dont need those props. 
  A (prop1) -> B (prop1) -> C (prop1), only C need to use prop1, not B.

  Issue 2: Components coupled to props/implementation
  */

  return (
    <div className="container">
      <h1>Pokemon Search</h1>

      <div className="twoColumnLayout">
        <div>
          <PokemonFilter filter={filter} setFilter={setFilter} />
          <PokemonTable
            pokemons={pokemons}
            filter={filter}
            setSelectedPokemon={setSelectedPokemon}
          />
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
