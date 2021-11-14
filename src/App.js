import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import PokemonProvider from "./context/pokemonContext/provider";

import PokemonCatchHome from "./components/PokemonCatchHome/PokemonCatchHome";
import PokemonHome from "./components/PokemonHome/PokemonHome";

import "./App.css";

export const Routes = () => {
  return (
    <>
      <Switch>
        <PokemonProvider>
          <Route exact path="/" component={PokemonHome}> 
          </Route>
          <Route exact path="/home"  component={PokemonHome}>
          </Route>
          <Route exact path="/catch" component={PokemonCatchHome}>
          </Route>
        </PokemonProvider>
      </Switch>
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
};

export default App;
