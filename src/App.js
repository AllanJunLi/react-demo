import { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";

export const ACTION = {
  SET_FILTER: "setFilter",
  SET_POKEMONS: "setPokemons",
  SELECT_POKEMON: "selectPokemon",
};

const pokemonReducer = (
  state = { filter: "", pokemons: [], selectedPokemon: null },
  action
) => {
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

// redux store
const store = createStore(
  pokemonReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: ACTION.SET_POKEMONS, payload: data }));
  }, []);

  if (!pokemons) {
    return <div>Loading ...</div>;
  }

  return (
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
  );
}

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
