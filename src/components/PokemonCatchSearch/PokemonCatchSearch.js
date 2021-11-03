
import { useState } from 'react';
import { useContext } from "react";
import PokemonContextActions from '../../context/pokemonContext/actions';
import { PokemonContext } from "../../context/pokemonContext/context";

const PokemonCatchSearch = () => {

    const {dispatch, state: {catchedPokemons}} = useContext(PokemonContext);

    const [value, setValue] = useState('');

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = catchedPokemons.filter((user) => {
            return user.name.toLowerCase().startsWith(keyword.toLowerCase());
          });

          console.log('res', results);

          dispatch({
              type: PokemonContextActions.setResultCatchedPokemonSearch,
              results: false
          })
        } else {
            console.log('else', catchedPokemons);
          dispatch({
            type: PokemonContextActions.setOrderByNameCatchedPokemon,
            results: catchedPokemons
        })
        dispatch({
          type: PokemonContextActions.setResultCatchedPokemonSearch,
          results: true
      })
        }    
        setValue(keyword);
    }

    return (
        <>
        <input
        type="search"
        value={value}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />
        </>
    )



}

export default PokemonCatchSearch;