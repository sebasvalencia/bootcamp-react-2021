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

const PokemonCatchDetail = () => {
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
    console.log("catch PokemonCatchDetail", selectedCatchPokemon);
    dispatch({
      type: PokemonContextActions.releaseCatchPokemon,
      results: selectedCatchPokemon,
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

  return (
    <>
      {isLoading ? (
        <GlobalSpinner />
      ) : (
        <div>
          <button onClick={handlePrev}> {"<"} </button>
          <div style={{ backgroundColor: color }}> {name} </div>
          <button onClick={handlerNext}> {">"} </button>
          <div>
            <img src={image} alt="" width="200px" height="200px"></img>
          </div>

          <Modal handleClose={handleOpenModal} show={modalOnOff} color={color}>
            <PokemonModalDetail image={image} name={name} abilities={abilities}
              pokemon={pokemon}
              isCatchPage={true}
            />
          </Modal>

          <div>
            <button onClick={releasePokemon}>
              <img src={Release} alt="" />
              <h3>Release</h3>
            </button>

            <button onClick={handleOpenModal}>
              <img src={Details} alt="" />
              <h3>Details</h3>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCatchDetail;
