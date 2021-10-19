import UserContextActions from "./actions";
//https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150
const userReducer = (state, action) => {
  switch (action.type) {
    case UserContextActions.getInitialData:
      return {
        ...state,
        users: [...state.users, ...action.results],
      };
    case UserContextActions.setUserData:
      return {
        ...state,
        users: [...state.users, action.user],
      };
    case UserContextActions.emptyUsers:

      const newUsers = [...state.users].filter((user) => user.name !== action.name);

      return {
        ...state,
        users: newUsers,
      };

      // return {
      //   ...state,
      //   users: []
      // }
    default:
      return { ...state };
  }
};

export default userReducer;
