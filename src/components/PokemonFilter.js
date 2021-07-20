import { useDispatch, useSelector } from "react-redux";
import { ACTION } from "../App";

export default function PokemonFilter() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);

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
