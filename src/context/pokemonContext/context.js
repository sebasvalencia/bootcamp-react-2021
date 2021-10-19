import { createContext } from "react";

const initialState= {
    pokemons: []
};

const PokemonContext = createContext(initialState);

export {
    PokemonContext,
    initialState
};