import Table from "react-bootstrap/Table";
import PokemonRow from "./PokemonRow";
import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../App";

export default function PokemonTable() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const filter = useSelector((state) => state.filter);

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
