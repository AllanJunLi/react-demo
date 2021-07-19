import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

const PokemonRow = ({ pokemon, onSelect }) => {
  return (
    <tr onClick={() => onSelect(pokemon)}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  );
};

const PokemonInfo = ({ name, base }) => (
  <Card>
    <Card.Header>{name.english}</Card.Header>
    <Card.Body>
      <table>
        <tbody>
          {Object.entries(base).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card.Body>
  </Card>
);

function App() {
  const [filter, setFilter] = useState("");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => setPokemons(data));
  }, []);

  return (
    <div className="container">
      <h1>Pokemon Search</h1>

      <div className="twoColumnLayout">
        <div>
          <input
            className="filterInput"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <Table borderless hover size="sm">
            <thead>
              <tr style={{ textAlign: "left" }}>
                <th>Name</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {pokemons
                .filter((pokemon) =>
                  pokemon.name.english
                    .toLowerCase()
                    .includes(filter.toLowerCase())
                )
                .slice(0, 20)
                .map((pokemon) => (
                  <PokemonRow
                    key={pokemon.id}
                    pokemon={pokemon}
                    onSelect={(pokemon) => setSelectedPokemon(pokemon)}
                  />
                ))}
            </tbody>
          </Table>
        </div>
        {selectedPokemon && <PokemonInfo {...selectedPokemon} />}
      </div>
    </div>
  );
}

export default App;
