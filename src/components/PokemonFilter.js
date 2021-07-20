import PokemonContext from "../PokemonContext";
import { useContext } from "react";
import { ACTION } from "../App";

export default function PokemonFilter() {
  const {
    state: { filter },
    dispatch,
  } = useContext(PokemonContext);
  return (
    <input
      className="filterInput"
      value={filter}
      onChange={(e) => {
        dispatch({ type: ACTION.SET_FILTER, payload: e.target.value });
      }}
    />
  );
}
