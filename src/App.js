import { useEffect, useContext } from "react";
import axios from "axios";
import "./App.css";

import PokemonList from "./components/PokemonList/PokemonList";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";
import PokemonSearch from  "./components/PokemonSearch/PokemonSearch";

import PokemonProvider from "./context/pokemonContext/provider";
import { PokemonContext } from "./context/pokemonContext/context";
import PokemonContextActions from "./context/pokemonContext/actions";
// import { UserContext } from "./context/userContext/context";
// import UserContextActions from "./context/userContext/actions";
// import UserProvider from "./context/userContext/provider";

// const AddUsers = () => {
//   const { state, dispatch } = useContext(UserContext);
//   const [name, setName] = useState("");


//     useEffect( () => {

//     const getData = async () => {

//       const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150");
//       dispatch({
//         type: UserContextActions.getPokemons,
//         results: data.results,
//       })

//     };

//     getData();

//   }, [] );




//   const add = () => {
//     if (!name) return;

//     dispatch({
//       type: UserContextActions.setUserData,
//       user: {
//         name: name, // "Wilson",
//         id: state.users.length,
//       },
//     });
//     setName("");
//   };

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       {/* <input value={name} type="text" onChange={(e) => {setName(e.target.value)}} /> */}

//       <button onClick={add}>Add</button>
//     </>
//   );
// };

// const ShowUsers = () => {
//   const {
//     state: { users },
//   } = useContext(UserContext);

//   return (
//     <div>
//       <span>Users:</span>
//       <ul>
//         {users.map(({ name, id }) => (
//           <li key={id}>{name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const CleanUsers = () => {
//   const { dispatch } = useContext(UserContext);
//   const [name, setName] = useState("");

//   const cleanUsers = () => {

//     if(!name) return;

//     dispatch({
//       type: UserContextActions.emptyUsers,
//       name
//     });
//   };

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />

//       <button onClick={cleanUsers}>Clean</button>
//     </>
//   );
// };

const GetAndSetPokemons = () => {
  const { dispatch } = useContext(PokemonContext);

  useEffect( () => {
    const getData = async () => {
      const {data} = await axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150");
      console.log('data.results[0]', data.results[0]);
      dispatch({
        type: PokemonContextActions.setPokemons,
        results: data.results,
      })
      dispatch({
        type: PokemonContextActions.setFilterPokemons,
        results:  data.results
    })
  //   dispatch({
  //     type: PokemonContextActions.setSelectedPokemon,
  //     results: data.results[0]
  // })
    };
    getData();
  }, [] );

  return <></>;
}

const App = () => {
  
  return (
    <>
      {/* <UserProvider>
        <AddUsers />
        <ShowUsers />
        <CleanUsers />
      </UserProvider> */}
        
      <PokemonProvider>
        <GetAndSetPokemons />
        <PokemonSearch />
        <PokemonList />
        <PokemonDetail />

      </PokemonProvider>
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

export default App;
