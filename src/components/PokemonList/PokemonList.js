import { useContext, useState } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import "./pokemonList.scss";
// import axios from "axios";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

const PokemonList = () => {

  const [pokemon, setPokemon] = useState();

  const {
    dispatch,
    state: { filterPokemons },
  } = useContext(PokemonContext);

  const openInformationPokemon = (pokemon) => {
    setPokemon(pokemon);
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: pokemon,
    });
  };

  return (
    <> 
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
      <PokemonDetail />
    
    </>
  );
};

export default PokemonList;
