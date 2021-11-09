/* eslint-disable array-callback-return */
import { useContext, useEffect, useRef, useState } from "react";
import _ from "lodash";
import axios from "axios";
import "./pokemonOrder.scss";
import { PokemonContext } from "../../context/pokemonContext/context";
import PokemonContextActions from "../../context/pokemonContext/actions";
import ButtonFilter from "../shared/ButtonFilter/ButtonFilter";

const PokemonOrder = () => {
  const [items] = useState([
    { label: "Por Nombre", value: "nombre" },
    { label: "Por tipo", value: "tipo" },
  ]);
  const [value, setValue] = useState("tipo");
  const [pokemonsAndTypes, setPokemonsAndTypes] = useState({});
  const [open, setOpen] = useState(false);
  const drop = useRef(null);

  const {
    dispatch,
    state: { catchedPokemons },
  } = useContext(PokemonContext);

  useEffect(() => {
    try {
      let pokemonsAndTypes = [];
      const calculate = async () => {
        catchedPokemons.forEach(async (pokemon, i) => {
          const { data } = await axios.get(pokemon.url);
          const types = data.types;
          const typesObj = [];
          types.forEach((type) => {
            typesObj.push(type.type.name);
          });

          pokemonsAndTypes[i] = {
            pokemon: pokemon,
            types: typesObj,
          };
        });
      };
      calculate();
      setPokemonsAndTypes(pokemonsAndTypes);
    } catch (error) {}

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const order = (e) => {
    setValue(e.currentTarget.value);
    if (e.currentTarget.value === "nombre") {
      orderByName();
    } else if (e.currentTarget.value === "tipo") {
      orderByType();
    }
  };

  const orderByName = () => {
    const orderCatchedPokemons = _.sortBy(catchedPokemons, (cp) => cp.name, [
      "asc",
    ]);

    dispatch({
      type: PokemonContextActions.setOrderByNameCatchedPokemon,
      results: orderCatchedPokemons,
    });
  };

  const orderByType = () => {
    const val = _.chain(pokemonsAndTypes)
      .groupBy("types")
      .toPairs()
      .map((s) => {
        return _.zipObject(["types", "pokemons"], s);
      })
      .value();

    let returnPokemons = [];
    val.map((s, i) => {
      const d = s.pokemons;
      d.map((p) => {
        returnPokemons.push(p.pokemon);
      });
    });

    dispatch({
      type: PokemonContextActions.setOrderByNameCatchedPokemon,
      results: returnPokemons,
    });
  };

  return (
    <>
      <div
        className="pokemon-order-button-open-filter"
        ref={drop}
      >
        <ButtonFilter onClick={() => setOpen((open) => !open)} />
        {
         open && (
          <select value={value} onChange={order} className="pokemon-order-select-button">
            {items.map((item) => (
              <option className="pokemon-order-item" key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
         )
        }
      </div>
    </>
  );
};

export default PokemonOrder;
