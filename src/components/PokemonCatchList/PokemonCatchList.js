import { useHistory } from "react-router";
import Home from "../../Icons/Home.png";

const PokemonCatchList = () => {

    const history = useHistory()

    const handleReturnHome = () => {
        history.push('/home');
    }


    return (
        <>
            <div>PokemonCatchList</div>
            <button onClick={handleReturnHome}><img src={Home} alt="" /></button>
        </>
    )

}

export default PokemonCatchList;
