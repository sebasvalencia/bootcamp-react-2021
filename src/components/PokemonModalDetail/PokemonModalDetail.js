import { useContext } from 'react';
import PokemonContextActions from '../../context/pokemonContext/actions';
import { PokemonContext } from '../../context/pokemonContext/context';
import Catch from '../../Icons/Catch.png'
import Release from '../../Icons/Release.png'

const PokemonModalDetail = ({image, name, abilities, pokemon, isCatchPage}) => {

    const { dispatch } = useContext(PokemonContext);

    const catchPokemon = () => {
        console.log('catchPokemon PokemonModalDetail', pokemon);
        dispatch({
          type: PokemonContextActions.catchPokemons,
          results: pokemon
        });
      };
    
    const releasePokemon = () => {
    console.log('relasePokemon PokemonModalDetail', pokemon)
    dispatch({
        type: PokemonContextActions.releaseCatchPokemon,
        results: pokemon
    })
    };

    return (
        <>
            <div className="pokemon-detail-modal-container">
                <div className="pokemon-detail-modal-header">
                    <div>{name}</div>
                </div> 
                <div>
                    <div>
                        <img src={image} alt={image} />
                    </div>

                    <div>
                        Abilities
                        <ul>
                            {
                                abilities.map( (abilitiyObject, i) => 
                                    <li key={i}>{abilitiyObject.ability.name}</li>                                
                                )
                            }
                        </ul>
                    </div>
                </div>

                
                <div className="pokemon-catch-button">
                {
                    isCatchPage
                    ?  
                    <button  onClick={releasePokemon}>
                        <img src={Release} alt="" />
                        <h3>Release</h3>
                    </button>
                    :
                    <button  onClick={catchPokemon}>
                        <img src={Catch} alt="" />
                        <h3>Catch</h3>
                    </button> 
                }
               


                

                </div>

            </div>
        </>
    )
}

export default PokemonModalDetail;

