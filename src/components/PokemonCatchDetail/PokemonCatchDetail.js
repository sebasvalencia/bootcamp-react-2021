import { useContext, useEffect, useState } from "react";
import axios from "axios";
import _ from "lodash";
import "./pokemonCatchDetail.scss";
import Modal from "../shared/Modal/Modal";
import Details from "../../Icons/Details.png";
import Release from "../../Icons/Release.png";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import PokemonContextActions from "../../context/pokemonContext/actions";
import GlobalSpinner from "../shared/GlobalSpinner/GlobalSpinner";

const PokemonCatchDetail = (params) => {
  const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [color, setColor] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const {
    dispatch,
    state: { selectedCatchPokemon, catchedPokemons },
  } = useContext(PokemonContext);


  useEffect(() => {
    try {
      if (!_.isEmpty(selectedCatchPokemon)) {
        const getPokemonData = async () => {
          const { data } = await axios.get(selectedCatchPokemon.url);
          setName(data.name);
          setImage(data.sprites.other.dream_world.front_default);
          setAbilities(data.abilities);

          const speciesColor = data.species.url;
          const dataColor = await axios.get(speciesColor);
          setColor(dataColor.data.color.name);
          setPokemon(selectedCatchPokemon);
          setLoading(false);
          params.setColorBackground(dataColor.data.color.name);
        };
        getPokemonData();
      } else {
        setLoading(false);
      }
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCatchPokemon]);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const releasePokemon = () => {
    setName("")
    setImage("");
    setAbilities([]);
    setColor("");
    setPokemon([]);
    
    dispatch({
      type: PokemonContextActions.releaseCatchPokemon,
      results: selectedCatchPokemon,
    });
    dispatch({
      type: PokemonContextActions.setSelectedCatchPokemon,
      results: [],
    });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    const index = _.findIndex(catchedPokemons, selectedCatchPokemon);
    dispatch({
      type: PokemonContextActions.setSelectedCatchPokemon,
      results: catchedPokemons[index - 1],
    });
  };
  const handlerNext = (e) => {
    e.preventDefault();
    const index = _.findIndex(catchedPokemons, selectedCatchPokemon);
    dispatch({
      type: PokemonContextActions.setSelectedCatchPokemon,
      results: catchedPokemons[index + 1],
    });
  };

  const styles = { border:  `5px solid ${color}`};
  const stylesArrows = {color: `${color}`}

  return (
    <>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        
          // name === "" ? 
          // <div className="not-found-data">
          // no results found
          // </div> 
          
          // :
        
        <div className="container-catch-detail">

          <div className="pokemon-catch-detail-header" style={styles}>
            <button className="pokemon-catch-detail-button-left" onClick={handlePrev}> <span className="pokemon-catch-detail-span-arrow" style={stylesArrows}>{"<"}</span> </button>
            <p className="pokemon-catch-detail-name"> {name} </p>
            <button className="pokemon-catch-detail-button-right" onClick={handlerNext}> <span className="pokemon-catch-detail-span-arrow" style={stylesArrows}>{">"} </span> </button>
          </div>

          <div className="pokemon-catch-detail-container-content">
            <div className="pokemon-catch-detail-images">
              <div className="pokemon-catch-detail-background-poke-images">
                <img className="pokemon-catch-detail-poke-images" src={image} alt={name}  />
              </div>
            </div>

            <div className="pokemon-catch-detail-buttonss">
              <div className="pokemon-catch-detail-button-releases">
                  <button className="pokemon-catch-detail-buttons" onClick={releasePokemon}>
                    <img className="pokemon-catch-detail-button-images" src={Release} alt="Catch" />
                  </button>
                  <p  className="pokemon-catch-detail-button-titles">Release</p>
                </div>

                <div className="pokemon-catch-detail-button-details">
                  <button className="pokemon-catch-detail-buttons" onClick={handleOpenModal}>
                    <img className="pokemon-catch-detail-button-images" src={Details} alt="Details" />
                  </button>
                  <p  className="pokemon-catch-detail-button-titles">Details</p>
                </div>
            </div>

          </div>

          <Modal handleClose={handleOpenModal} show={modalOnOff} color={color}>
            <PokemonModalDetail handleClose={handleOpenModal} image={image} name={name} abilities={abilities}
              pokemon={pokemon}
              isCatchPage={true}
            />
          </Modal>

        </div>
      )}
    </>
  );
};

export default PokemonCatchDetail;
