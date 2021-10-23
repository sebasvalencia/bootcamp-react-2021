
const PokemonModalDetail = ({pokemonData}) => {

    const name =  pokemonData.name;
    const image = pokemonData.sprites.other.dream_world.front_default
    const abilities = pokemonData.abilities;
    
    return (
        <>
            <div className="pokemon-detail-modal-container">
                <div className="pokemon-detail-modal-header">
                    <div>{name}</div>
                </div> 
                <div>
                    <div>
                        <img src={image} alt={name} />
                    </div>

                    <div>
                        Abilities
                        <ul>
                            {
                                abilities.map( (abilitiyObject, i) => (
                                    <li key={i}>{abilitiyObject.ability.name}</li>

                                )
                                )
                            }
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )

}

export default PokemonModalDetail;

