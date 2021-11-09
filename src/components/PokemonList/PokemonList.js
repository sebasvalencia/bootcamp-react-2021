import { useContext } from "react";
import "./pokemonList.scss";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonDetail from "../PokemonDetail/PokemonDetail";

const PokemonList = (params) => {
  // const [pokemon, setPokemon] = useState();

  const {
    dispatch,
    state: { filterPokemons },
  } = useContext(PokemonContext);

  const openInformationPokemon = (pokemon) => {
    // setPokemon(pokemon);
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: pokemon,
    });
  };

  return (
    <>
      <div className="pokemon-wrapper-list">
        <div className="pokemon-list">
          <ul className="pokemon-list-ul">
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
        <div className="pokemon-detail">
          <PokemonDetail setColorBackground={params.setColorBackground} />
        </div>
      </div>
    </>
  );
};

export default PokemonList;
