import axios from "axios";
import {  useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext/context";
import Modal from "../Modal/Modal";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import "./pokemonDetail.scss";
import Details from '../../Icons/Details.png'
import Catch from '../../Icons/Catch.png'
import PokemonContextActions from "../../context/pokemonContext/actions";
import _ from "lodash";
const PokemonDetail = () => {

  // const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState([]);
  

  const { dispatch, state:{selectedPokemon}
  } = useContext(PokemonContext);

  useEffect(() => {
      try {
        if( !_.isEmpty(selectedPokemon) ){
          const getPokemonData = async () => {
            const { data } = await axios.get(selectedPokemon.url);
            setName(data.name)
            setImage(data.sprites.other.dream_world.front_default)
            setAbilities(data.abilities)
          };
          getPokemonData();
        }


      } catch (error) {
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedPokemon]);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const catchPokemon = () => {
    dispatch({
      type: PokemonContextActions.catchPokemons,
      results: selectedPokemon //selectedPokemon
    })
  //   dispatch({
  //     type: PokemonContextActions.setFilterCatchedPokemons,
  //     results: selectedPokemon
  // })
  };

  // if(isLoading ) { return <div> Loading ... </div> };

  return (
    <>
      <button > {'<'} </button>
      <div> {name} </div>
      <div>  </div>
      <button > {'>'} </button>
      <div>
        <img
          // src={''}
          src={image}
          alt=""
          width="200px"
          height="200px"
        ></img>
      </div>

      <Modal handleClose={handleOpenModal} show={modalOnOff}>
          <PokemonModalDetail image={image} name={name} abilities={abilities}/>
        </Modal>

        <div>

          <button  onClick={handleOpenModal}>
            <img src={Details} alt="" />
            <h3>Details</h3>
          </button>

          <button  onClick={catchPokemon}>
            <img src={Catch} alt="" />
            <h3>Catch</h3>
          </button>

        </div>
    </>
  );
};

export default PokemonDetail;
