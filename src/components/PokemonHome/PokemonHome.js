import PokemonList from "../PokemonList/PokemonList";
import PokemonSearch from "../PokemonSearch/PokemonSearch";
import Home from "../../Icons/Home.png";
import { useHistory } from "react-router";

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
        
    </>
  );
};

export default PokemonHome;
