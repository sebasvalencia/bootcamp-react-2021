import { useReducer } from "react";
import {PokemonCatchContext, initialState} from "./context";
import pokemonCatchReducer from "./reducer";

const PokemonCatchProvider = ( {children} ) => {

    
    const [state, dispatch] = useReducer(pokemonCatchReducer, initialState);


    console.log('state, dispatch', children);

    return (
        // state, Modify
        <PokemonCatchContext.Provider  value={{state, dispatch}}>
            {children}
        </PokemonCatchContext.Provider>
    );

};

export default PokemonCatchProvider


