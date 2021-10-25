import { useContext } from "react";
import { useHistory } from "react-router";
import { PokemonCatchContext } from "../../context/pokemonCatchContext/context";
import PokemonCatchProvider from "../../context/pokemonCatchContext/provider";
import PokemonProvider from "../../context/pokemonContext/provider";
import Home from "../../Icons/Home.png";
import PokemonCatchList from "../PokemonCatchList/PokemonCatchList";


const PokemonCatchHome = () => {

    // const { dispatch, state: { setPokemonsCatch }, } = useContext(PokemonCatchContext);
    // console.log('setPokemonsCatch', setPokemonsCatch);

    const history = useHistory()

    const handleReturnHome = () => {
        history.push('/home');
    }

    return (
        <>
        <PokemonProvider>

        {/* <PokemonCatchProvider> */}

            <div>PokemonCatchList</div>
            <button onClick={handleReturnHome}><img src={Home} alt="" /></button>
            <PokemonCatchList />

        {/* </PokemonCatchProvider> */}

        </PokemonProvider>
        </>
    )


}


export default PokemonCatchHome;