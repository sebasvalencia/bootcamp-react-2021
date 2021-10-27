import { useContext } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";

const PokemonCatchList = () => {

    const {dispatch, state: {catchedPokemons}} = useContext(PokemonContext);

    // console.log('filterCatchedPokemons', catchedPokemons);

    const openInformationPokemon = (pokemon) => {
        dispatch({
            type: PokemonContextActions.setSelectedCatchPokemon,
            results: pokemon
        })
    }

    return (
        <div className="pokemon-list">
            <ul className="ul-list">
                {
                    catchedPokemons.length >=1 ?
                    catchedPokemons.map( (pokemon, i) => 
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
    )
}

export default PokemonCatchList;
