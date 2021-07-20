import create from "zustand";

const useStore = create((set) => ({
  filter: "",
  pokemons: [],
  selectedPokemon: null,
  setFilter: (filter) => set((state) => ({ ...state, filter })),
  setPokemons: (pokemons) => set((state) => ({ ...state, pokemons })),
  setSelectedPokemon: (selectedPokemon) =>
    set((state) => ({ ...state, selectedPokemon })),
}));

fetch("http://localhost:3000/pokemon.json")
  .then((resp) => resp.json())
  .then((pokemons) => useStore.setState((state) => ({ ...state, pokemons })));

export default useStore;
