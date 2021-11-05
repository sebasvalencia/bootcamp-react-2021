import { useState, useContext } from "react";
import "./pokemonSearch.scss";
// import Search from "../../Icons/Search.png";
import PokemonContextActions from "../../context/pokemonContext/actions";
import { PokemonContext } from "../../context/pokemonContext/context";

const PokemonSearch = () => {
  const {
    dispatch,
    state: { pokemons },
  } = useContext(PokemonContext);

  const [value, setValue] = useState("");

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = pokemons.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
      });

      console.log("res", results);

      dispatch({
        type: PokemonContextActions.setFilterPokemons,
        results: results,
      });
    } else {
      console.log("else", pokemons);
      dispatch({
        type: PokemonContextActions.setFilterPokemons,
        results: pokemons,
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
        className="pokemon-input-search"
      />
    </>
  );
};

export default PokemonSearch;
