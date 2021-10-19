import PokemonContextActions from "./actions";


const pokemonReducer = (state, action) => {

    switch (action.type) {
        case PokemonContextActions.getPokemons:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.results]
            }
    
        default:
            return {...state};
    }

}

export default pokemonReducer;



