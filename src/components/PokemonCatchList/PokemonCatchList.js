import { useContext, useState } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonCatchDetail from "../PokemonCatchDetail/PokemonCatchDetail";

const PokemonCatchList = () => {

    const {dispatch, state: {catchedPokemons}} = useContext(PokemonContext);
    console.log('catchedPokemons', catchedPokemons);

    const [pokemonName, setPokemonName] = useState('');
    const [filterCatchedPokemons, setFilterCatchedPokemons] = useState(catchedPokemons);

    const filter = (e) => {
        const keyword = e.target.value;
    
        if (keyword !== '') {
          const results = catchedPokemons.filter((user) => {
            return user.name.toLowerCase().startsWith(keyword.toLowerCase());
          });
          setFilterCatchedPokemons(results);
        } else {
          setFilterCatchedPokemons(catchedPokemons);
        }    
        setPokemonName(keyword);
    }

    const openInformationPokemon = (pokemon) => {
        dispatch({
            type: PokemonContextActions.setSelectedCatchPokemon,
            results: pokemon
        })
    }

    return (
        <>
        <input
        type="search"
        value={pokemonName}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

            <div className="pokemon-list">
                <ul className="ul-list">
                    {
                        filterCatchedPokemons.length >=1 ?
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
