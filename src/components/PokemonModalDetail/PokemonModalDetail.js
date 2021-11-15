import { useContext, useState } from "react";
import "./pokemonModalDetail.scss";
import Catch from "../../Icons/Catch.png";
import Release from "../../Icons/Release.png";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";

const PokemonModalDetail = ({
  handleClose,
  image,
  name,
  abilities,
  pokemon,
  isCatchPage,
  release,
}) => {
  
  const [name2, setName] = useState(name);

  console.log('name2',name2);

  const { dispatch } = useContext(PokemonContext);

  const catchPokemon = () => {
    dispatch({
      type: PokemonContextActions.catchPokemons,
      results: pokemon,
    });
  };

  const releasePokemon = () => {
    console.log('releasePokemon', name2);
    setName("")
    dispatch({
      type: PokemonContextActions.releaseCatchPokemon,
      results: pokemon,
    });
    dispatch({
      type: PokemonContextActions.setSelectedCatchPokemon,
      results: [],
    });
    handleClose()
  };

  return (
    <>
      <div className="pokemon-detail-modal-container">
        <div className="pokemon-detail-modal-header">
          <div className="pokemon-detail-modal-title">{name2}</div>
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
