import { useState } from "react";
import { useContext } from "react";
import "./pokemonCatchSearch.scss";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";

const PokemonCatchSearch = () => {
  const {
    dispatch,
    state: { catchedPokemons },
  } = useContext(PokemonContext);
  const [fakeCatchPokemons] = useState(catchedPokemons);

  const [value, setValue] = useState("");

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = catchedPokemons.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });

      dispatch({
        type: PokemonContextActions.setResultCatchedPokemonSearch,
        results: false,
      });
      dispatch({
        type: PokemonContextActions.setCatchFilterPokemons,
        results: results,
      });
    } else {
      dispatch({
        type: PokemonContextActions.setCatchFilterPokemons,
        results: fakeCatchPokemons,
      });
      dispatch({
        type: PokemonContextActions.setResultCatchedPokemonSearch,
        results: true,
      });
    }
    setValue(keyword);
  };

  return (
    <>
      <input
        type="search"
        value={value}
        onChange={filter}
        className="pokemon-catch-input-search"
      />
    </>
  );
};

export default PokemonCatchSearch;
