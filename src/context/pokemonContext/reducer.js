import PokemonContextActions from "./actions";

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case PokemonContextActions.setPokemons:
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.results],
      };
    case PokemonContextActions.setFilterPokemons:
      return {
        ...state,
        filterPokemons: [...action.results],
      };
    case PokemonContextActions.setSelectedPokemon:
      return {
        ...state,
        selectedPokemon: action.results,
      };

      // catch
      case PokemonContextActions.catchPokemons:
        return {
          ...state,
          catchedPokemons: [...state.catchedPokemons, action.results],
        };
      case PokemonContextActions.setFilterCatchedPokemons:
        console.log("action", action);
        return {
          ...state,
          filterCatchedPokemons: [...action.results],
        };

    default:
      return { ...state };
  }
};

export default pokemonReducer;
