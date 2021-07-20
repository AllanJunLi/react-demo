import { useEffect, useReducer } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import PokemonContext from "./PokemonContext";

export const ACTION = {
  SET_FILTER: "setFilter",
  SET_POKEMONS: "setPokemons",
  SELECT_POKEMON: "selectPokemon",
};

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case ACTION.SET_FILTER:
      return { ...state, filter: action.payload };
    case ACTION.SET_POKEMONS:
      return { ...state, pokemons: action.payload };
    case ACTION.SELECT_POKEMON:
      return { ...state, selectedPokemon: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(pokemonReducer, {
    pokemons: [],
    filter: "",
    selectedPokemon: null,
  });

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: ACTION.SET_POKEMONS, payload: data }));
  }, []);

  if (!state.pokemons) {
    return <div>Loading ...</div>;
  }

  return (
    <PokemonContext.Provider value={{ state, dispatch }}>
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
