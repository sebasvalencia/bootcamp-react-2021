import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import PokemonProvider from "./context/pokemonContext/provider";

import PokemonCatchHome from "./components/PokemonCatchHome/PokemonCatchHome";
import PokemonHome from "./components/PokemonHome/PokemonHome";

import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <PokemonProvider>
              <PokemonHome />
            </PokemonProvider>
          </Route>
          <Route exact path="/home">
            <PokemonProvider>
              <PokemonHome />
            </PokemonProvider>
          </Route>
          <Route exact path="/catch">
            <PokemonProvider>
              <PokemonCatchHome />
            </PokemonProvider>
          </Route>
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
