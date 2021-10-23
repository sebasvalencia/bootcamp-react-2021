import { createContext } from "react";

const initialState= {
    pokemons: [],
    filterPokemons: [],
    selectedPokemon: {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
    }
};

const PokemonContext = createContext(initialState);

export {
    PokemonContext,
    initialState
};