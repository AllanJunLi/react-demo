import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonFilter from "./components/PokemonFilter";

function App() {
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

export default App;
