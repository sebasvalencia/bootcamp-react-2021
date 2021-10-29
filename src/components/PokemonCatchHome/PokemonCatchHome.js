
import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";

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

      <PokemonCatchList />
      
    </>
  );
};

export default PokemonCatchHome;
