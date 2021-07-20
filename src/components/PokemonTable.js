import Table from "react-bootstrap/Table";
import PokemonRow from "./PokemonRow";
import useStore from "./../store";

export default function PokemonTable() {
  const pokemons = useStore((state) => state.pokemons);
  const filter = useStore((state) => state.filter);
  const setSelectedPokemon = useStore((state) => state.setSelectedPokemon);

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
              onSelect={setSelectedPokemon}
            />
          ))}
      </tbody>
    </Table>
  );
}
