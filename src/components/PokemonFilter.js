import useStore from "./../store";

export default function PokemonFilter() {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

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
