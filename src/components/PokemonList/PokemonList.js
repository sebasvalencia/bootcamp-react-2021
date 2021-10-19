import { useContext } from "react";
import { PokemonContext } from "../../context/pokemonContext/context";
import "./pokemonList.scss";

const PokemonList = () => {

    const {state: {pokemons}} = useContext(PokemonContext);

    console.log('pokemons', pokemons);

    const openInformationPokemon = (url) => {
        console.log('click', url);
    }

    return (
        <div className="pokemon-list">
            <ul className="ul-list">
                {
                    pokemons.map( ({name, url}) => <li key={name} onClick={() => openInformationPokemon(url)}>{name}</li> )
                }
            </ul>
        </div>
    )

}

export default PokemonList;