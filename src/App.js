import { useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";

import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonSearch from  "./components/PokemonSearch/PokemonSearch";
import PokemonCatchHome from "./components/PokemonCatchHome/PokemonCatchHome";

import PokemonProvider from "./context/pokemonContext/provider";
import { PokemonContext } from "./context/pokemonContext/context";
import PokemonContextActions from "./context/pokemonContext/actions";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PokemonHome from "./components/PokemonHome/PokemonHome";
import PokemonCatchProvider from "./context/pokemonCatchContext/provider";

const App = () => {
  
  return (
    <>
      <BrowserRouter>
            <Switch>
            <Route exact path="/" render={ (props)=> <PokemonProvider> <PokemonHome  /> </PokemonProvider> } />  
            <Route exact path="/home" render={ (props)=> <PokemonProvider> <PokemonHome  /> </PokemonProvider> } />
            <Route exact path="/catch" render={ (props)=> <PokemonProvider> <PokemonCatchHome  /> </PokemonProvider> } />
            {/* <Route exact path="/catch" render={ (props)=> <PokemonCatchProvider> <PokemonCatchHome  /> </PokemonCatchProvider> } /> */}
            </Switch>
      </BrowserRouter>
    </>
  );


  // return (
  //   <>
  //     {/* <UserProvider>
  //       <AddUsers />
  //       <ShowUsers />
  //       <CleanUsers />
  //     </UserProvider> */}
        
  //     <PokemonProvider>
  //       <GetAndSetPokemons />
  //       <PokemonSearch />

  //       <button >
  //           <img src={Home} alt="" />
  //           </button>

  //       <PokemonList />
  //       <PokemonDetail />

  //     </PokemonProvider>
  //   </>
  // );

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
