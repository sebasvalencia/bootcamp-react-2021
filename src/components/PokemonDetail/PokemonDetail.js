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

const PokemonDetail = () => {
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
        };
        getPokemonData();
      }
    } catch (error) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon]);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const catchPokemon = () => {
    console.log("catchPokemon PokemonDetail", selectedPokemon);
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

  return (
    <>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div className="container-detail" >
          <button onClick={handlePrev}> {"<"} </button>
          <div style={{ backgroundColor: color }}> {name} </div>
          <div> </div>
          <button onClick={handlerNext}> {">"} </button>
          <div>
            <img
              src={image}
              alt=""
              width="200px"
              height="200px"
            ></img>
          </div>

          <Modal handleClose={handleOpenModal} show={modalOnOff} color={color}>
            <PokemonModalDetail image={image} name={name} abilities={abilities}
              pokemon={pokemon}
              isCatchPage={false}
            />
          </Modal>

          <div>
            <button onClick={handleOpenModal}>
              <img src={Details} alt="" />
              <h3>Details</h3>
            </button>

            <button onClick={catchPokemon}>
              <img src={Catch} alt="" />
              <h3>Catch</h3>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonDetail;
