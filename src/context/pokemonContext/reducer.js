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
    case PokemonContextActions.catchPokemons:
      return {
        ...state,
        catchedPokemons: [...state.catchedPokemons, action.results],
      };
    case PokemonContextActions.setSelectedCatchPokemon:
      return {
        ...state,
        selectedCatchPokemon: action.results,
      };
    case PokemonContextActions.setOrderByNameCatchedPokemon:
      return {
        ...state,
        catchedPokemons: [...action.results]
      }
    case PokemonContextActions.setCatchFilterPokemons:
      return {
        ...state,
        catchedPokemons: [...action.results],
      };
      case PokemonContextActions.setResultCatchedPokemonSearch:
        return {
          ...state,
          resultCatchedPokemonSearch: action.results
        }
        case PokemonContextActions.releaseCatchPokemon:
      return {
        ...state,
        catchedPokemons: [
          ...state.catchedPokemons.filter((pokemon) => pokemon !== action.results),
        ],
      };

    default:
      return { ...state };
  }
};

export default pokemonReducer;
