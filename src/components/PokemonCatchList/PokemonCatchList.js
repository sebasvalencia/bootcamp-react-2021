import { useContext, useEffect, useState } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonCatchDetail from "../PokemonCatchDetail/PokemonCatchDetail";
import _ from "lodash";

const PokemonCatchList = () => {

    const {dispatch, state: {catchedPokemons, resultCatchedPokemonSearch}} = useContext(PokemonContext);
    // console.log('PokemonCatchList', catchedPokemons);

    // console.log('resultCatchedPokemonSearch', resultCatchedPokemonSearch);

    const [pokemonName, setPokemonName] = useState('');
    const [filterCatchedPokemons, setFilterCatchedPokemons] = useState([]);
        
        useEffect( () => {
            
            setFilterCatchedPokemons(catchedPokemons)
            console.log('filterCatchedPokemons', filterCatchedPokemons);
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    })

    const openInformationPokemon = (pokemon) => {
        dispatch({
            type: PokemonContextActions.setSelectedCatchPokemon,
            results: pokemon
        })
    }

    return (
        <>

            <div className="pokemon-list">
                <ul className="ul-list">
                    {
                        // filterCatchedPokemons.length >=1  ?
                        resultCatchedPokemonSearch  ?
                        filterCatchedPokemons.map( (pokemon, i) => 
                        <li key={i} 
                        onClick={() => openInformationPokemon(pokemon)}
                        >{pokemon.name}</li> 
                        ) :
                        <div>
                            no results found
                        </div>
                    }
                </ul>
            </div>
            <PokemonCatchDetail />
        </>
    )
}

export default PokemonCatchList;
