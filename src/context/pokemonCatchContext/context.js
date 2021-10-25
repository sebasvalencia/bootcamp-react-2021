import { createContext } from "react";

const initialState= {
    setPokemonsCatch: []
};

const PokemonCatchContext = createContext(initialState);

export {
    PokemonCatchContext,
    initialState
};