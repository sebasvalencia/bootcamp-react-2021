import { useContext, useEffect, useState } from "react";
import _ from "lodash";
import axios from "axios";
import "./pokemonDetail.scss";
import Modal from "../shared/Modal/Modal";
import Catch from "../../Icons/Catch.png";
import Details from "../../Icons/Details.png";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import PokemonContextActions from "../../context/pokemonContext/actions";
import GlobalSpinner from "../shared/GlobalSpinner/GlobalSpinner";

const PokemonDetail = (params) => {
  const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [color, setColor] = useState("");
  const [pokemon, setPokemon] = useState([]);

  const {
    dispatch,
    state: { selectedPokemon, filterPokemons },
  } = useContext(PokemonContext);

  useEffect(() => {
    try {
      if (!_.isEmpty(selectedPokemon)) {
        const getPokemonData = async () => {
          const { data } = await axios.get(selectedPokemon.url);
          setName(data.name);
          setImage(data.sprites.other.dream_world.front_default);
          setAbilities(data.abilities);

          const speciesColor = data.species.url;
          const dataColor = await axios.get(speciesColor);
          setColor(dataColor.data.color.name);
          setPokemon(selectedPokemon);
          setLoading(false);
          params.setColorBackground(dataColor.data.color.name);
        };
        getPokemonData();
      }
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon]);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const catchPokemon = () => {
    dispatch({
      type: PokemonContextActions.catchPokemons,
      results: selectedPokemon,
    });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    const index = _.findIndex(filterPokemons, selectedPokemon);
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: filterPokemons[index - 1],
    });
  };
  const handlerNext = (e) => {
    e.preventDefault();
    const index = _.findIndex(filterPokemons, selectedPokemon);
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: filterPokemons[index + 1],
    });
  };

  const styles = { border:  `5px solid ${color}`};
  const stylesArrows = {color: `${color}`};


  return (
    <>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="container-detail" >
          
          <div className="pokemon-detail-header" style={styles}>
            <button className="pokemon-detail-button-left" onClick={handlePrev}><span className="pokemon-detail-span-arrow" style={stylesArrows}>{"<"}</span></button>
            <p className="pokemon-detail-name" > {name} </p>
            <button className="pokemon-detail-button-right" onClick={handlerNext}><span className="pokemon-detail-span-arrow" style={stylesArrows}>{">"}</span></button>
          </div>

          <div className="pokemon-detail-container-content">
            <div className="pokemon-detail-images">
              <div className="pokemon-detail-background-poke-images">
                <img className="pokemon-detail-poke-images" src={image} alt={name}  />
              </div>
            </div>

            <div className="pokemon-detail-buttonss">

              <div className="pokemon-detail-button-catchs">
                <button className="pokemon-detail-buttons" onClick={catchPokemon}>
                  <img className="pokemon-detail-button-images" src={Catch} alt="Catch" />
                </button>
                <p  className="pokemon-detail-button-titles">Catch</p>
              </div>

              <div className="pokemon-detail-button-releases">
                <button className="pokemon-detail-buttons" onClick={handleOpenModal}>
                  <img className="pokemon-detail-button-images" src={Details} alt="Details" />
                </button>
                <p  className="pokemon-detail-button-titles">Details</p>
              </div>

            </div>

          </div>

          <Modal handleClose={handleOpenModal} show={modalOnOff} color={color}>
            <PokemonModalDetail image={image} name={name} abilities={abilities}
              pokemon={pokemon}
              isCatchPage={false}
            />
          </Modal>

          
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
