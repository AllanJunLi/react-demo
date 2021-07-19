import Table from "react-bootstrap/Table";
import PokemonRow from "./PokemonRow";

export default function PokemonTable({ pokemons, filter, setSelectedPokemon }) {
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
