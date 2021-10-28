import { createContext } from "react";

const initialState= {
    pokemons: [],
    filterPokemons: [],
    catchedPokemons: [],
    filterCatchedPokemons: [],
    selectedPokemon: {},
    selectedCatchPokemon: []
};

const PokemonContext = createContext(initialState);

export {
    PokemonContext,
    initialState
};