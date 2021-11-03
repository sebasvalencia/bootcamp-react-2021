
import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";
import PokemonCatchSearch from "../PokemonCatchSearch/PokemonCatchSearch";
import PokemonOrder from "../PokemonOrder/PokemonOrder";

const PokemonCatchHome = () => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/home");
  };

  return (
    <>
      <PokemonOrder />
      <button onClick={handleReturnHome}>
        <img src={Home} alt="" />
      </button>
      <PokemonCatchSearch />
      <PokemonCatchList />
      
    </>
  );
};

export default PokemonCatchHome;
