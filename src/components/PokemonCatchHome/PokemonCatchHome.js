
import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";
import PokemonCatchDetail from "../PokemonCatchDetail/PokemonCatchDetail";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";
import PokemonSearch from "../PokemonSearch/PokemonSearch";

const PokemonCatchHome = () => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/home");
  };

  return (
    <>
      <button onClick={handleReturnHome}>
        <img src={Home} alt="" />
      </button>

      {/* <PokemonSearch /> */}
      <PokemonCatchList />
      
    </>
  );
};

export default PokemonCatchHome;
