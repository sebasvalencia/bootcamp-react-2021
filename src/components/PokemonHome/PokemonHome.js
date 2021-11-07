import { useState } from "react";
import { useHistory } from "react-router";
import "./pokemonHome.scss";
import Home from "../../Icons/Home.png";
import PokemonList from "../PokemonList/PokemonList";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

const PokemonHome = () => {

  const [colorBackground, setColorBackground] = useState('');
  const history = useHistory();

  const handleGotoCatchListClick = () => {
    history.push("/catch");
  };

  return (
    <>
      <div className="pokemon-home-container"  style={{ backgroundColor: colorBackground }}>
        <div className="pokemon-home-search">
          <PokemonSearch />
        </div>

        <div className="pokemon-home-catch-list-button">
          <button className="pokemon-home-catch-button" onClick={handleGotoCatchListClick}>
            <img className="pokemon-home-catch-image" src={Home} alt="catch-list" />
          </button>
        </div>

        <div className="pokemon-home-list">
          <PokemonList setColorBackground={setColorBackground} />
        </div>
      </div>
    </>
  );
};

export default PokemonHome;
