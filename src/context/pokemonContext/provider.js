import axios from "axios";
import { useEffect, useReducer } from "react";
import PokemonContextActions from "./actions";
import {PokemonContext, initialState} from "./context";
import pokemonReducer from "./reducer";

const PokemonProvider = ( {children} ) => {

      useEffect(() => {

        (async () => {
            const { data } = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
              );
              console.log("data.results[0]", data.results[0]);
              dispatch({
                type: PokemonContextActions.setPokemons,
                results: data.results,
              });
              dispatch({
                type: PokemonContextActions.setFilterPokemons,
                results: data.results,
              });
              dispatch({
                type: PokemonContextActions.setSelectedPokemon,
                results: data.results[0],
              });
        })()

  }, []);

 

    const [state, dispatch] = useReducer(pokemonReducer, initialState);

    return (
        // state, Modify
        <PokemonContext.Provider  value={{state, dispatch}}>
            {children}
        </PokemonContext.Provider>
    );

};

export default PokemonProvider


