
import { useState } from "react";
import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";
import "./pokemonCatchHome.scss";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";
import PokemonCatchSearch from "../PokemonCatchSearch/PokemonCatchSearch";
import PokemonOrder from "../PokemonOrder/PokemonOrder";

const PokemonCatchHome = () => {
  const [colorBackground, setColorBackground] = useState('');
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/home");
  };

  return (
    <>
      <div className="pokemon-home-catch-container"  style={{ backgroundColor: colorBackground }}>
        
        <div className="pokemon-home-catch-order">
          <PokemonOrder />
        </div>
        
        
        <div className="pokemon-catch-search">
          <PokemonCatchSearch />
        </div>

        <div className="pokemon-home-return-home-button">
          <button className="pokemon-home-return-button" onClick={handleReturnHome}>
            <img className="pokemon-home-image" src={Home} alt="Home" />
          </button>
        </div>


        <div className="pokemon-catch-list">
          <PokemonCatchList />
        </div>

      </div>
      
    </>
  );
};

export default PokemonCatchHome;
