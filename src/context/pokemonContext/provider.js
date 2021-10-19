import { useReducer } from "react";
import {PokemonContext, initialState} from "./context";
import pokemonReducer from "./reducer";

const PokemonProvider = ( {children} ) => {

    
    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    return (
        // state, Modify
        <PokemonContext.Provider  value={{state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    );

};

export default PokemonProvider


