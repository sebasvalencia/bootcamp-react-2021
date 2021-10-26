import PokemonDetail from "../PokemonDetail/PokemonDetail";
import PokemonList from "../PokemonList/PokemonList";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import { useContext, useEffect } from "react";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonProvider from "../../context/pokemonContext/provider";
import Home from "../../Icons/Home.png";
import { useHistory } from "react-router";
import axios from "axios";

const PokemonHome = () => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/catch");
  };

  return (
    <>
        <button onClick={handleClick}>
          <img src={Home} alt="" />
        </button>
        <PokemonSearch />
        <PokemonList />
        <PokemonDetail />
    </>
  );
};

export default PokemonHome;
