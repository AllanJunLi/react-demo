export default function PokemonFilter({ filter, setFilter }) {
  return (
    <input
      className="filterInput"
      value={filter}
      onChange={(e) => {
        setFilter(e.target.value);
      }}
    />
  );
}
