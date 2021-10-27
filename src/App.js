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
          <PokemonProvider>
            <Route exact path="/">
              <PokemonHome />
            </Route>
            <Route exact path="/home">
              <PokemonHome />
            </Route>
            <Route exact path="/catch">
              <PokemonCatchHome />
            </Route>
          </PokemonProvider>
        </Switch>
      </BrowserRouter>
    </>
  );

};

export default App;
