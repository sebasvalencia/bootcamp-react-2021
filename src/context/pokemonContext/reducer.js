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
    //   case PokemonContextActions.setSelectedPokemon:
    //     console.log("action", action);
    //     return {
    //       ...state,
    //       selectedPokemon: [...state.selectedPokemon, action.results],
    //     };

    default:
      return { ...state };
  }
};

export default pokemonReducer;
