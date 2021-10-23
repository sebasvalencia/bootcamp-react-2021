import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext/context";
import Modal from "../Modal/Modal";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import "./pokemonDetail.scss";
import Details from '../../Icons/Details.png'
import Catch from '../../Icons/Catch.png'

const PokemonDetail = () => {

  // const details = './../Icons/Details.png'

  const {
    state: { selectedPokemon },
  } = useContext(PokemonContext);

    useEffect(() => {
        const getPokemonData = async () => {
          const { data } = await axios.get(selectedPokemon.url);
          console.log("data", data);
          setPokemonData(data);
          setLoading(false);
        };
    
        getPokemonData();
  
    }, [selectedPokemon.url]);


  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);

  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  const catchPokemon = () => console.log('catch');

  if(isLoading) { return <div> Loading ... </div> };

  return (
    <>
      <button > {'<'} </button>
      <div> {pokemonData.name} </div>
      <button > {'>'} </button>
      <div>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt=""
          width="200px"
          height="200px"
        ></img>
      </div>

      <Modal handleClose={handleOpenModal} show={modalOnOff}>
          <PokemonModalDetail pokemonData={pokemonData} />
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
