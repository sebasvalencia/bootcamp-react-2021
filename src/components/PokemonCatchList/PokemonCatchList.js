import { useContext, useEffect, useState } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonCatchDetail from "../PokemonCatchDetail/PokemonCatchDetail";
import "./pokemonCatchList.scss";

const PokemonCatchList = (params) => {

    const {dispatch, state: {catchedPokemons, resultCatchedPokemonSearch}} = useContext(PokemonContext);
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
        <div className="pokemon-catch-wrapper-list">
            <div className="pokemon-catch-lists">
                <ul className="pokemon-catch-list-ul">
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
            <div className="pokemon-catch-detail">
                <PokemonCatchDetail setColorBackground={params.setColorBackground} />
            </div>

        </div>
        </>
    )
}

export default PokemonCatchList;
