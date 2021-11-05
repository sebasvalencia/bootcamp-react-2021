import { useContext } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import Catch from "../../Icons/Catch.png";
import Release from "../../Icons/Release.png";
import "./pokemonModalDetail.scss";

const PokemonModalDetail = ({
  image,
  name,
  abilities,
  pokemon,
  isCatchPage,
}) => {
  const { dispatch } = useContext(PokemonContext);

  const catchPokemon = () => {
    console.log("catchPokemon PokemonModalDetail", pokemon);
    dispatch({
      type: PokemonContextActions.catchPokemons,
      results: pokemon,
    });
  };

  const releasePokemon = () => {
    console.log("relasePokemon PokemonModalDetail", pokemon);
    dispatch({
      type: PokemonContextActions.releaseCatchPokemon,
      results: pokemon,
    });
  };

  return (
    <>
      <div className="pokemon-detail-modal-container">
        <div className="pokemon-detail-modal-header">
          <div className="pokemon-detail-modal-title">{name}</div>
        </div>
        
        <div className="pokemon-detail-modal-content">
            <div className="pokemon-detail-image">
                <div className="pokemon-detail-background-poke-image">
                  <img className="pokemon-detail-poke-image" src={image} alt={image} />
                </div>
            </div>

            <div className="pokemon-detail-abilities">
                <p >Abilities</p>
                <ul>
                {abilities.map((abilitiyObject, i) => (
                    <li key={i}>{abilitiyObject.ability.name}</li>
                ))}
                </ul>
            </div>
            

            <div>
            {isCatchPage ? (
                <div className="pokemon-detail-button-release">
                <button className="pokemon-detail-button" onClick={releasePokemon}>
                    <img className="pokemon-detail-button-image" src={Release} alt="release" />
                </button>
                <p className="pokemon-detail-button-title">Release</p>
                </div>
            ) : (
                <div className="pokemon-detail-button-catch">
                <button className="pokemon-detail-button" onClick={catchPokemon}>
                    <img className="pokemon-detail-button-image" src={Catch} alt="catch" />
                </button>
                <p className="pokemon-detail-button-title">Catch</p>
                </div>
            )}
            </div>
        </div>

      </div>
    </>
  );
};

export default PokemonModalDetail;
