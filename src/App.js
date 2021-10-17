// import logo from './logo.svg';
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

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

  const { loading, data: pokemonList } = useRequest(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150"
  );

  const photo = pokemonList;

  console.log('photo: ', photo);

  return (
    <>
      {loading && <h1>Loading...</h1>}
      <ul>
        {pokemonList.map(({ name, url }) => (
          <li key={name}>
            {name} --- {url}
          </li>
        ))}
      </ul>
    </>
  );
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
