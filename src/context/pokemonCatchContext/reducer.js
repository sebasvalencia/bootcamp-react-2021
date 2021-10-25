import PokemonCatchActions from "./action";

const pokemonCatchReducer = (state, action) => {
  switch (action.type) {
    case PokemonCatchActions.setPokemonCatch:
      console.log("action", action);
      return {
        ...state,
        setPokemonsCatch: [...state.setPokemonsCatch, action.results],
      };

    default:
      return { ...state };
  }
};

export default pokemonCatchReducer;
