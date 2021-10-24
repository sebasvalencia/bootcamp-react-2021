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

const GetAndSetPokemons = () => {
  const { dispatch } = useContext(PokemonContext);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
      );
      console.log("data.results[0]", data.results[0]);
      dispatch({
        type: PokemonContextActions.setPokemons,
        results: data.results,
      });
      dispatch({
        type: PokemonContextActions.setFilterPokemons,
        results: data.results,
      });
      dispatch({
        type: PokemonContextActions.setSelectedPokemon,
        results: data.results[0],
      });
    };
    getData();
  }, []);

  return <></>;
};

const PokemonHome = () => {
  const { dispatch, state: { pokemons }, } = useContext(PokemonContext);
  console.log("pokemonList", pokemons);

  const history = useHistory();

  const handleClick = () => {
    history.push("/catch");
  };

  return (
    <>
      <PokemonProvider>
        <GetAndSetPokemons />
        <PokemonSearch />
        <button onClick={handleClick}>
          <img src={Home} alt="" />
        </button>
        <PokemonList />
        <PokemonDetail />
      </PokemonProvider>
    </>
  );
};

export default PokemonHome;
