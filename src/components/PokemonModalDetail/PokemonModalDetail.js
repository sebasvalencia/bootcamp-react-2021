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
                <img src={image} alt={image} />
            </div>

            <div className="pokemon-detail-abilities">
                Abilities
                <ul className="pokemon-detail-list">
                {abilities.map((abilitiyObject, i) => (
                    <li key={i}>{abilitiyObject.ability.name}</li>
                ))}
                </ul>
            </div>
            

            <div className="pokemon-detail-button">
            {isCatchPage ? (
                <div className="pokemon-detail-button-release">
                <button className onClick={releasePokemon}>
                    <img src={Release} alt="" />
                </button>
                <h3>Release</h3>
                </div>
            ) : (
                <div className="pokemon-detail-button-catch">
                <button onClick={catchPokemon}>
                    <img src={Catch} alt="" />
                </button>
                <h3>Catch</h3>
                </div>
            )}
            </div>
        </div>

      </div>
    </>
  );
};

export default PokemonModalDetail;
