import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext/context";
import Modal from "../Modal/Modal";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import "./pokemonDetail.scss";
import Details from '../../Icons/Details.png'
import Release from '../../Icons/Release.png'
import PokemonContextActions from "../../context/pokemonContext/actions";
import _ from "lodash";

const PokemonCatchDetail = () => {

  // const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState([]);

  const { dispatch,
    state: { selectedCatchPokemon },
  } = useContext(PokemonContext);

  console.log('selectedPokemon', selectedCatchPokemon);

    useEffect(() => {
      try {
        if( !_.isEmpty(selectedCatchPokemon) ){
          const getPokemonData = async () => {
            const { data } = await axios.get(selectedCatchPokemon.url);
            setName(data.name)
            setImage(data.sprites.other.dream_world.front_default)
            setAbilities(data.abilities)
          };
          getPokemonData();
        }
      } catch (error) {
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedCatchPokemon]);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const releasePokemon = () => {
    console.log('catch', selectedCatchPokemon)
    dispatch({
      type: PokemonContextActions.releaseCatchPokemon,
      results: selectedCatchPokemon
    })
  //   dispatch({
  //     type: PokemonContextActions.setFilterCatchedPokemons,
  //     results: []
  // })
  };

  // if(isLoading) { return <div> Loading ... </div> };

  return (
    <>
      <button > {'<'} </button>
      <div> {name} </div>
      <button > {'>'} </button>
      <div>
        <img
          src={image}
          alt=""
          width="200px"
          height="200px"
        ></img>
      </div>

      <Modal handleClose={handleOpenModal} show={modalOnOff}>
          <PokemonModalDetail image={image} name={name} abilities={abilities} />
      </Modal>

        <div>
          <button  onClick={releasePokemon}>
            <img src={Release} alt="" />
            <h3>Release</h3>
          </button>

          <button  onClick={handleOpenModal}>
            <img src={Details} alt="" />
            <h3>Details</h3>
          </button>
        </div>
    </>
  );
};

export default PokemonCatchDetail;
