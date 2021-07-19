export default function PokemonRow({ pokemon, onSelect }) {
  return (
    <tr onClick={() => onSelect(pokemon)}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(", ")}</td>
    </tr>
  );
}
