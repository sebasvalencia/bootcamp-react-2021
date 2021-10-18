// import logo from './logo.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import Modal from "./components/Modal/Modal";
import PokemonList from "./components/PokemonList/PokemonList";

import PokemonDetail from "./components/PokemonDetail/PokemonDetail"; 

const useRequest = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  //axios
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(url);
        setLoading(false);
        setData(results);
      } catch (error) {
        console.log("error: ", error);
      }
    };
    setTimeout(() => {
      getData();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // return [loading, data];
  return {
    loading,
    data,
  };
};

const App = () => {
  console.log("App");

  const [modalOnOff, setModalOnOff] = useState(false);
  //Turns out that the inline function is necessary to set the state after the component has rendered. This ensures that the new state we're passing to setToggle as an argument is actually applied to the component itself.
  const handleOpenModal = () => setModalOnOff(!modalOnOff);

  return (
    <>
      {/* <h2>Your toggle is {modalOnOff.toString()} 🥳</h2> */}
      <Modal handleClose={handleOpenModal} show={modalOnOff}>
        {/* <p>Modal</p> */}
        <PokemonDetail />
      </Modal>
      <button onClick={handleOpenModal}>
        <h3>Details</h3>
      </button>

      <PokemonList></PokemonList>


    </>
  );

  // const { loading, data: pokemonList } = useRequest(
  //   "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  // );

  // const photo = pokemonList;

  // console.log('photo: ', photo);

  // return (
  //   <>
  //     {loading && <h1>Loading...</h1>}
  //     <ul>
  //       {pokemonList.map(({ name, url }) => (
  //         <li key={name}>
  //           {name} --- {url}
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header> */}

//       <div className="App-main">

//       </div>

//     </div>
//   );
// }

export default App;
