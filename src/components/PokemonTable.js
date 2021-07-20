import Table from "react-bootstrap/Table";
import PokemonContext from "../PokemonContext";
import PokemonRow from "./PokemonRow";
import { useContext } from "react";
import { ACTION } from "../App";

export default function PokemonTable() {
  const {
    state: { pokemons, filter },
    dispatch,
  } = useContext(PokemonContext);

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
              onSelect={(pokemon) =>
                dispatch({ type: ACTION.SELECT_POKEMON, payload: pokemon })
              }
            />
          ))}
      </tbody>
    </Table>
  );
}
