import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../../context/pokemonContext/context";
import Modal from "../Modal/Modal";
import PokemonModalDetail from "../PokemonModalDetail/PokemonModalDetail";
import "./pokemonDetail.scss";
import Details from '../../Icons/Details.png'
import Release from '../../Icons/Release.png'
import PokemonContextActions from "../../context/pokemonContext/actions";

const PokemonCatchDetail = () => {

  const { dispatch,
    state: { selectedCatchPokemon },
  } = useContext(PokemonContext);

  console.log('selectedPokemon', selectedCatchPokemon);

    useEffect(() => {
      try {
        const getPokemonData = async () => {
          const { data } = await axios.get(selectedCatchPokemon.url);
          console.log("data", data);
          setPokemonData(data);
          setLoading(false);
        };
    
        getPokemonData();
        
      } catch (error) {
        console.log('PokemonCatchDetail error: ', error);
        setPokemonData([]);
      }
  
    }, [selectedCatchPokemon.url]);


  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [modalOnOff, setModalOnOff] = useState(false);

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
