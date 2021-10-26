import { useContext, useEffect } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import "./pokemonList.scss";
import axios from "axios";


const PokemonList = () => {

    // const {dispatch, state: {pokemons}} = useContext(PokemonContext);
    const {dispatch, state: {filterPokemons}} = useContext(PokemonContext);



    useEffect(() => {
        const getData = async () => {
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
        };
        getData();
      }, [])

    
    const openInformationPokemon = (pokemon) => {
        dispatch({
            type: PokemonContextActions.setSelectedPokemon,
            results: pokemon
        })
    }

    return (
        <div className="pokemon-list">
            <ul className="ul-list">
                {
                    filterPokemons.length >=1 ?
                    filterPokemons.map( (pokemon, i) => 
                    <li key={i} onClick={() => openInformationPokemon(pokemon)}>{pokemon.name}</li> 
                    ) :
                    <div>
                        no results found
                    </div>
                }
            </ul>
        </div>
    )
}

export default PokemonList;