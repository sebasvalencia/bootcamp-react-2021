import { createContext } from "react";

const initialState= {
    pokemons: [],
    filterPokemons: [],
    catchedPokemons: [],
    filterCatchedPokemons: [],
    selectedPokemon: {},
    selectedCatchPokemon: [],
    resultCatchedPokemonSearch: true,
};

const PokemonContext = createContext(initialState);

export {
    PokemonContext,
    initialState
};