
import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";
import PokemonCatchDetail from "../PokemonCatchDetail/PokemonCatchDetail";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";

const PokemonCatchHome = () => {
  const history = useHistory();

  const handleReturnHome = () => {
    history.push("/home");
  };

  return (
    <>
      <div>PokemonCatchList</div>
      <button onClick={handleReturnHome}>
        <img src={Home} alt="" />
        h2
      </button>

      <PokemonCatchList />
      <PokemonCatchDetail />
    </>
  );
};

export default PokemonCatchHome;
