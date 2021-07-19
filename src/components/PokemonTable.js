import Table from "react-bootstrap/Table";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";
import { useContext } from "react";

export default function PokemonTable() {
  const { pokemons, filter, setSelectedPokemon } = useContext(PokemonContext);
  return (
    <Table borderless hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {pokemons
          .filter((pokemon) =>
            pokemon.name.english.toLowerCase().includes(filter.toLowerCase())
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
  );
}
