import { useContext, useEffect, useState } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import "./pokemonList.scss";
import axios from "axios";

const PokemonList = () => {

  const [isLoading, setLoading] = useState(true);

  const {
    dispatch,
    state: { filterPokemons },
  } = useContext(PokemonContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
        );

        // const { data } = await axios.request({
        //   method: "get",
        //   url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150",
        //   crossDomain: true
        // }          
        // );


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
      } catch (error) {
        console.log("PokemonList error: ", error);
      }
    };
    getData();
  }, []);

  const openInformationPokemon = (pokemon) => {
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: pokemon,
    });
  };

  // if(isLoading) { return <div> Loading PokemonList... </div> };

  return (
    <div className="pokemon-list">
      <ul className="ul-list">
        {filterPokemons.length >= 1 ? (
          filterPokemons.map((pokemon, i) => (
            <li key={i} onClick={() => openInformationPokemon(pokemon)}>
              {pokemon.name}
            </li>
          ))
        ) : (
          <div>no results found</div>
        )}
      </ul>
    </div>
  );
};

export default PokemonList;
