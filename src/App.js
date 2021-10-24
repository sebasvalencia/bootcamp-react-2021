import { useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";

import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonSearch from  "./components/PokemonSearch/PokemonSearch";

import PokemonProvider from "./context/pokemonContext/provider";
import { PokemonContext } from "./context/pokemonContext/context";
import PokemonContextActions from "./context/pokemonContext/actions";


const GetAndSetPokemons = () => {
  const { dispatch } = useContext(PokemonContext);

  useEffect( () => {
    const getData = async () => {
      const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150");
      console.log('data.results[0]', data.results[0]);
      dispatch({
        type: PokemonContextActions.setPokemons,
        results: data.results,
      })
      dispatch({
        type: PokemonContextActions.setFilterPokemons,
        results:  data.results
    })
    dispatch({
      type: PokemonContextActions.setSelectedPokemon,
      results: data.results[0]
  })
    };
    getData();
  }, [] );

  return <></>;
}

const App = () => {
  
  return (
    <>
      {/* <UserProvider>
        <AddUsers />
        <ShowUsers />
        <CleanUsers />
      </UserProvider> */}
        
      <PokemonProvider>
        <GetAndSetPokemons />
        <PokemonSearch />
        <PokemonList />
        <PokemonDetail />

      </PokemonProvider>
    </>
  );

  // const { loading, data: pokemonList } = useRequest(
  //   "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  // );

  // const photo = pokemonList;

  // console.log('photo: ', photo);

  // return (
  //   <>
  //     {loading && <h1>Loading...</h1>}
  //     <ul>
  //       {pokemonList.map(({ name, url }) => (
  //         <li key={name}>
  //           {name} --- {url}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};

export default App;
