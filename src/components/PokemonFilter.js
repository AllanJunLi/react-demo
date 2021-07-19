import PokemonContext from "../PokemonContext";
import { useContext } from "react";

export default function PokemonFilter() {
  const { filter, setFilter } = useContext(PokemonContext);
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
