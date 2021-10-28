import Catch from '../../Icons/Catch.png'

const PokemonModalDetail = ({image, name, abilities}) => {

    const catchPokemon = () => console.log('catch');

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
                <button  onClick={catchPokemon}>
                    <img src={Catch} alt="" />
                    <h3>Catch</h3>
                </button>
                </div>

            </div>
        </>
    )
}

export default PokemonModalDetail;

